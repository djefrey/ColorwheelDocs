---
title: vertexLight
description: Overview of the clrwl_vertexLight inout
sidebar:
    label: vertexLight
    order: 7
---

### `vec2 clrwl_vertexLight;`  

**Sent to fragment**: YES  
**Remaps**: `gl_MultiTexCoord1`, `gl_MultiTexCoord2` (as `vec4(clrwl_vertexLight, 0, 1)`)  

---

The instance light value attribute, equivalent to Iris' [`gl_MultiTexCoord1`](https://shaders.properties/current/reference/attributes/vauv2/). Using `gl_TextureMatrix[1]` converts the current range (`0.0 - 0.9375`) to `0.03125 - 0.96875`.

:::caution[Warning]
`clrwl_vertexLight` represents the instance light value, but this may be different than the real value. The real value is only known after executing the material's light shader using [`clrwl_computeFragment`](/colorwheel/reference/miscellaneous/computeFragment). Use with caution.  
:::
