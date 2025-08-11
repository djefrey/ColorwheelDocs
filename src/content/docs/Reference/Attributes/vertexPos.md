---
title: vertexPos
description: Overview of the clrwl_vertexPos inout
sidebar:
    label: vertexPos
    order: 2
---

### `vec4 clrwl_vertexPos;`

**Sent to fragment**: YES  
**Remaps**: `gl_Vertex`  

---

The vertex position attribute, equivalent to Iris' [`gl_Vertex`](https://shaders.properties/current/reference/attributes/vaposition/). The position is in Flywheel space, `gl_ModelViewMatrix` must be used to convert it to the view space.  

:::note
No distortion effect (like waving or curvature) should be applied to `clrwl_vertexPos`. The attribute is used to compute the light value in the material's light shader, so it must match the block/entity world coordinates.  
:::
