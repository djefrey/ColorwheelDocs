---
title: vertexMidTexCoord
description: Overview of the clrwl_vertexMidTexCoord inout
sidebar:
    label: vertexMidTexCoord
    order: 6
---

### `vec2 clrwl_vertexMidTexCoord;`

**Sent to fragment**: NO  
**Remaps**: `mc_midTexCoord` (as `vec4(clrwl_vertexMidTexCoord, 0, 1)`)  

---

The texture UV coordinate of the center of the texture of the current quad, equivalent to Iris' [`mc_midTexCoord`](https://shaders.properties/current/reference/attributes/mc_midtexcoord/).
