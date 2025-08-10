---
title: Debug
description: Overview of the debug tools
sidebar:
    label: Debug
    order: 6
---

### Patched shaders

When Iris' [debug mode](https://shaders.properties/current/reference/miscellaneous/debug_mode/) is enabled, patched shaders are saved to `/colorwheel_sources/`. The line numbers provided in the error logs correspond to those patched codes. 

You may also provide tha Java argument `-Dflw.dumpShaderSource=true` to your Minecraft instance, instead of enabling Iris debug mode. 

### Debug mode

Colorwheel provides debug modes to vizualise some data using the `/colorwheel debug shader <debug mode>`. Currently, you may vizualise:
- Vertex normals
- Vertex tangents
- Vertex tangents handeness (red for `-1`, blue for `1`)
- Light level
- Overlay
- Old lighting
- Instance ID
- Model ID
