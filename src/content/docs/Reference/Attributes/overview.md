---
title: Overview
description: Overview of the in/outs
sidebar:
    label: Overview
    order: 1
---

**Attributes** are per-vertex data. Base values are encoded in the mesh and processed per-instance using the instance shader and the material's vertex shader.  

### In/outs

Some attributes are passed to the fragment stage, where they are being used by the material's fragment and light shaders.

- vertexPos
- vertexColor
- vertexTexCoord
- vertexOverlay
- vertexLight
- vertexNormal
- vertexTangent

In the geometry stage, those attributes are grouped in the interface blocks `clrwl_in[3]` and `clrwl_out`.

:::tip
Usage of `clrwl_out = clrwl_in[i];` when emitting a vertex in the geometry stage is highly recommended to be resilient in case of future updates.
:::

### Remappings

:::danger
Only the `compatibility` profile is supported.
:::

Iris Attributes                             | Colorwheel Values
--------------------------------------------|-----------------------
`gl_Vertex`                                 | `vertexPos`
`gl_Color`                                  | `vertexColor`
`gl_MultiTexCoord0`                         | `vertexTexCoord`
`gl_MultiTexCoord1` / `gl_MultiTexCoord2`   | `vertexLight`
`gl_Normal`                                 | `vertexNormal`
`at_tangent`                                | `vertexTangent`
`at_midBlock`                               | `vertexMidMesh`
`mc_midTexCoord`                            | `vertexMidTexCoord`
`mc_Entity`                                 | `vec2(-1, -1)`
