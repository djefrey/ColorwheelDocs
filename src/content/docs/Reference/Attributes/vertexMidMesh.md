---
title: vertexMidMesh
description: Overview of the clrwl_vertexMidMesh inout
sidebar:
    label: vertexMidMesh
    order: 10
---

### `vec4 clrwl_vertexMidMesh;`

**Sent to fragment**: NO  
**Remaps**: `at_midBlock`  

---

The `xyz` components store the world space offset from the vertex's position to the center of the **mesh** in a 1/64th block unit.  
The `w` component stores the light emission for block entities (range from `0` to `15`). Entities and effects have a value of 0.  

This is a best effort attempt to reproduce Iris' [`at_midBlock`](https://shaders.properties/current/reference/attributes/at_midblock/).
