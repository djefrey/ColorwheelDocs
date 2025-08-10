---
title: vertexTexCoord
description: Overview of the clrwl_vertexTexCoord inout
sidebar:
    label: vertexTexCoord
    order: 4
---

### `vec2 clrwl_vertexTexCoord;`

**Sent to fragment**: YES  
**Remaps**: `gl_MultiTexCoord0` (as `vec4(clrwl_vertexTexCoord, 0, 1)`)  

---

The vertex texcoord attribute, equivalent to Iris' [`gl_MultiTexCoord0`](https://shaders.properties/current/reference/attributes/vauv0/).
