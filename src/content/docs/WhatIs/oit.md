---
title: What is Order Independant Transparency ?
description: Explains what OIT is
sidebar:
    label: Order Independant Transparency
    order: 5
---

When rendering translucent geometries, the order of rendering is important because the result for a fragment depends its current value. To obtain the correct results, geometries must be sorted and rendered back-to-front relative to the camera. However, this comes at the cost of sorting each geometry prior on the CPU and rendering them in the correct order. This is also incompatible with custom vertex shaders that may do whatever transformations they want to do.  

Instead, Flywheel uses an [Order Independant Transparency](https://en.wikipedia.org/wiki/Order-independent_transparency) technique based on **wavelets**, as detailed in this [blog post](https://osor.io/OIT). Colorwheel reuse the same implementation.  

This has the advantage of not required any sorting, but at the cost of more work on the GPU and an increase in memory usage.  

### Wavelet-Based OIT

For a more detailed explanation, you may refer to the blog post, but here is a general overview:  

The idea consists of creating a function that approximates the transmittance-over-depth from the camera's perspective.  

1. An initial pass computes the depth ranges of all translucent geometries.
2. A second pass creates the transmittance-over-depth function for the depth range computed in the first pass. This function is stored as **coefficients** of a wavelet in **coefficients buffers**.
3. Translucent geometries are then rendered and blended using additive blending, which is order-independent because [addition is commutative](https://en.wikipedia.org/wiki/Commutative_property). The results are weighted using the transmittance-over-depth function and stored in **accumulation buffers**.
4. Finally, the **accumulation buffers** are composited onto the final buffers using the usual blending function (`SRC_ALPHA ONE_MINUS_SRC_ALPHA ONE ONE_MINUS_SRC_ALPHA`).

The transmittance-over-depth function is an approximation, with the level of detail determined by the **ranking** used, which specifies the number of coefficients stored. The formula used is `2^(R+1)`, where **R** is the **rank** of the coefficients buffer.

// TODO: provide schema

### Configuration

Colorwheel allows shaderpack developers to control this system in the [colorwheel.properties file](/reference/miscellaneous/colorwheelproperties/#oit). By default,  this feature is disabled and the order of rendering will matter.  

When enabled, all buffers are treated as **frontmost** by default. This mode do not generate the transmittance-over-depth function, and only the frontmost fragments are displayed (using the depth range generated in the first pass). This mode is useful for buffers storing data that isn't expected to be blended (like normals) or during the shadow render pass. 

For proper blending, **coefficients buffers** must be declared by listing their **ranks**. Once done, you can assign a **coefficients buffer** to a **buffer**. If multiple buffers have the same alpha value, they can share the same **coefficients buffer** to save memory.  
Valid ranks range from 1 to 3, with 3 being the recommended value. However, smaller values may be used to reduce memory usage at the cost of precision.

You may also configure the **accumulation buffers** texture format, which are by default `RGBA16F`. When doing so, make sure to use a  texture format with an alpha channel.  

:::caution[Warning]
When configuring the blending function of the program used by the OIT system, you are only modifying the blending settings for the final pass. The accumulation pass remains unchanged.
:::
