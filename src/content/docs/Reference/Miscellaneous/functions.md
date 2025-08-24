---
title: Functions
description: Overview of the functions
sidebar:
    label: Functions
    order: 3
---

### `computeFragment`

**Stage**: Fragment

```glsl
void clrwl_computeFragment(vec4 sampleColor, out vec4 fragColor, out vec2 fragLight, out float ao, out vec4 overlayColor);
```

`sampleColor`: the result obtained from sampling `gtexture`.  
`fragColor`: the result of `sampleColor * clrwl_vertexColor`, processed by the material's fragment shader, with ambient occlusion applied.  
`fragLight`: the final lightmap value, with values ranging from `0.03125` to `0.96875`.  
`ao`: the ambient occlusion value.  
`overlayColor`: equivalent to Iris's [`entityColor`](https://shaders.properties/current/reference/uniforms/rendering/#entitycolor).  

The function will also decide if the fragment should be discarded using the material's cutout shader.

### `setVertexOut`

**Stage**: Geometry

```glsl
void clrwl_setVertexOut(int i);
```

`i`: the input vertex index

Use this function before emitting a vertex in the geometry stage. It will assign the given input vertex attributes to the emitted vertex.  
This is important as Flywheel material shaders uses some attributes from the vertex stage (see [Attributes Overview page](/colorwheel/reference/attributes/overview/#inouts)).  
