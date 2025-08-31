---
title: vertexMidMesh
description: Overview of the clrwl_vertexMidMesh attribute
sidebar:
    label: vertexMidMesh
    order: 11
---

### `vec4 clrwl_vertexMidMesh;`

**Sent to fragment**: NO  
**Remaps**: `at_midBlock`  

---

The `xyz` components store the world space offset from the vertex's position to the center of the **mesh** in a 1/64th block unit.  
For terrain-like geometry, it correspond to the offset from the block center.  

The `w` component stores the light emission for block entities and terrain-like geometry (range from `0` to `15`).  

Equivalent to Iris' [`at_midBlock`](https://shaders.properties/current/reference/attributes/at_midblock/).  

:::note
Light emission for terrain-like geometry is not supported on Minecraft 1.20.1 (as Iris does not support it either).
:::
