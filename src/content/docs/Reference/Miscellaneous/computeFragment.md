---
title: computeFragment
description: Overview of the clrwl_computeFragment
sidebar:
    label: computeFragment
    order: 3
---

**Stage**: Fragment

```glsl
void clrwl_computeFragment(vec4 sampleColor, out vec4 fragColor, out vec2 fragLight, out float ao, out vec4 overlayColor);
```

`sampleColor`: the result obtained from sampling **gtexture**.  
`fragColor`: the result of `diffuseSample * clrwl_vertexColor`, processed by the material's fragment shader, with ambient occlusion applied.  
`fragLight`: the final lightmap value, with values ranging from 0.03125 to 0.96875.  
`ao`: the ambient occlusion value.  
`overlayColor`: equivalent to Iris's [`entityColor`](https://shaders.properties/current/reference/uniforms/rendering/#entitycolor).  

The function will also decide if the fragment should be discarded using the material's cutout shader.
