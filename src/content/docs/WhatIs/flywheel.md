---
title: What is Flywheel ?
description: Explains what Flywheel is about
sidebar:
    label: Flywheel
    order: 1
---

[Flywheel](https://github.com/Engine-Room/Flywheel/) is a mod that offers tools for mod developers to enhance performance and address limitations of Minecraft's rendering engine.

### Instancing

The current Minecraft rendering engine draws each entity individually, which doesn't fully utilize the GPU's capabilities. **Instanced rendering** is a technique that involves rendering the same model multiple times within a single draw call. This allows the GPU to fully parallelize the rendering process, maximizing the utilization of its capabilities. 

Essentially, instead of making 1,000 separate draw calls for each individual entity, Flywheel makes a single draw call to render 1,000 entities at once.

:::note
To improve this, Iris and the latest Minecraft snapshots use batching for entities and block entities. Everything is combined into a single 3D model and sent to the GPU at once. While this boosts performance, it also increases CPU overhead (due to rebuilding the mesh at every change) and memory usage (due to duplicated geometry).
:::

### Materials

Flywheel provides a [material](https://github.com/Engine-Room/Flywheel/blob/fdba7e66b45f884ff91b18b9e9abc8d2a9745d6b/common/src/api/java/dev/engine_room/flywheel/api/material/Material.java) system to mod developers, allowing them to fully customize how an instance in rendered. Mod developers may configure for example:
- A vertex shader   
- A fragment shader
- A light shader
- A cutout shader
- A custom texture
- The transparency mode (opaque, additive, lightning, glint and translucent)
- The depth test
- Color buffer and depth buffer writes

Mods developers may also create instance types with custom data layout. This allows them to send any data they want to be processed by a custom instance shader on the vertex stage.  

### Existing mods

By itself, Flywheel does nothing as it's just a library. Here's a list of mods using Flywheel:

- [Vanillin](https://modrinth.com/mod/flw-vanillin)
- [Create](https://modrinth.com/mod/create/) (and associated addons)
- [Valkyrien Skies 2](https://modrinth.com/mod/valkyrien-skies)
- [Effortless Building](https://modrinth.com/mod/effortless-building)

:::note
Flywheel is not available directly on CurseForge or Modrinth. Instead, mods using it needs to bundle it in their .jar file.
:::
