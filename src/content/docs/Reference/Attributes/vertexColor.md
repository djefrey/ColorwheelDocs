---
title: vertexColor
description: Overview of the clrwl_vertexColor inout
sidebar:
    label: vertexColor
    order: 3
---

### `vec4 clrwl_vertexColor;`

**Sent to fragment**: YES  
**Remaps**: `gl_Color`  

---

The instance vertex color attribute, equivalent to Iris' [`gl_Color`](https://shaders.properties/current/reference/attributes/vacolor/).

:::caution[Warning]
The attribute **does not** encode the ambient occlusion and old lighting. Those are computed using [`clrwl_computeFragment`](/colorwheel/reference/miscellaneous/computefragment).  
:::
