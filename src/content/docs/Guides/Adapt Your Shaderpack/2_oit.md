---
title: Order Independant Transparency
description: Setup of the OIT
sidebar:
    label: Order Independant Transparency
    order: 3
---

### The Issue

If you play a bit with translucent contraptions, you might encounter the following scenario:

![](../../../../assets/tutorial/good_transparency.png)

*Yay, it works !*

![](../../../../assets/tutorial/bad_transparency.png)

*Boo, it doesn't work !*

The issue arises because translucent geometries are not sorted: the red glass is rendered first, followed by the blue glass. This works in the first scenario because the red glass is behind the blue glass, but it fails in the second scenario as the red glass occludes the blue glass.

The typical solution to this issue is to sort geometries back-to-front relative to the camera, which is the method used by Iris. However, Flywheel does not sort translucent geometries. Instead, it uses Order Independent Transparency (OIT), which, as the name suggests, does not require geometries to be ordered on the CPU first.

:::caution[Warning]
Before proceding, you **should** read the explanation of [What is Order Independant Transparency ?](/colorwheel/whatis/oit).
:::

### Setup

By default, OIT is disabled and translucent geometries are rendered in whatever order (this is our current situation). To enable it, we must create the [`colorwheel.properties`](/colorwheel/reference/miscellaneous/colorwheelproperties) file and add the following line:

```
oit = true
```

This will enable OIT for both the `gbuffers` and `shadow` render passes. If we reload, we now have:

![](../../../../assets/tutorial/frontmost_red_oit.png)
![](../../../../assets/tutorial/frontmost_blue_oit.png)

*It's even worse than before !*

If you recall the OIT explanation, it is mentioned that, by default, all buffers are treated as **frontmost**. This means that only the translucent fragments closest to the camera will be rendered, which is our current situation. We now need to properly configure the OIT.

### Gbuffers

Let's do the inventory of our `colortex` used in `clrwl_gbuffers` with their alpha value:
- `colortex0`: `RGB16`, blending enabled, alpha may vary.
- `colortex1`: `RGBA8`, blending enabled, alpha set to 1.0.
- `colortex2`: `RGBA8`, blending enabled, alpha set to 1.0.

The `frontmost` mode has to be used in two cases:
- When the alpha value is always 1.0 (the fragment is opaque).  
- When the buffer written to has its blending disabled.  

For non opaque fragment with blending enabled, we have to assign a **coefficient buffer** to generate and use the appropriate transmittance-over-depth function.  

:::tip
If multiple buffers share the same alpha value, you can reuse the same **coefficients buffer**. This significantly reduces memory usage.
:::

In summary:
- `colortex0` is **non opaque** with **blending enabled**: declare and assign a **coefficient buffer**.
- `colortex1` and `colortex2` are **opaques**: set them to `frontmost`.

We can also assign more suitable image formats to `colortex1` and `colortex2` than the default `RGBA16F`, as we don't need the default 16-bit precision.  

:::note
If you're using one or two coefficients buffers, just use rank 3. In rare cases where more buffers are needed, you will have to reduce the ranks as you will reach the maximum framebuffer attachments on some systems.  
:::

```
oit = true

oit.gbuffers.coefficientRanks = 3

oit.gbuffers.colortex0 = 0

oit.gbuffers.colortex1 = frontmost
oit.gbuffers.colortex1.format = RGBA8

oit.gbuffers.colortex2 = frontmost
oit.gbuffers.colortex2.format = RGBA8
```

:::caution[Warning]
When changing the default format used, make sure to assign a format with an alpha channel.
:::

:::tip
If your're dealing with a deferred rendering pipeline which does not support translucent geometries, you can set all buffers to `frontmost`.
:::

![](../../../../assets/tutorial/correct_red_oit.png)
![](../../../../assets/tutorial/correct_blue_oit.png)

### Shadow

The easiest way to handle shadows is to set all buffers to **frontmost**. This will match current behavior (as blending is disabled in the shadow pass by default), and the shadow color will be determined by the geometry closest to the sun/moon. This will also require less GPU work and less GPU memory compared to a fully utilized OIT.

```
oit.shadow.shadowcolor0 = frontmost
oit.shadow.shadowcolor0.format = RGBA8
```

:::caution[Warning]
In typical usage, it's common to omit `RENDERTARGETS` or `DRAWBUFFERS` in `shadow`. However, Colorwheel relies on these directives to identify which buffers are used. If they are not specified, it will default to only `shadowcolor0`. **Always specify one of these directives when `shadowcolor1` is used.**
:::

```diff
#version 330 compatibility

uniform sampler2D gtexture;

in vec2 texcoord;
in vec4 glcolor;

+/* RENDERTARGETS: 0 */
layout(location = 0) out vec4 color;

void main() {
	color = texture(gtexture, texcoord);
	vec2 lmcoord;
	float ao;
	vec4 overlayColor;

	clrwl_computeFragment(color, color, lmcoord, ao, overlayColor);
}
```
