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
To improve this, Iris and the latest Minecraft snapshots use batching for entities and block entities. Everything is combined into a single 3D model and sent to the GPU at once. While this boosts performance, it also increases CPU overhead (due to rebuilding the mesh at every change) and memory overhead (due to duplicated geometry).
:::

### Custom Rendering

Flywheel allows mod developers to fully customize how an instance is rendered. Developers can create their own **instance data layouts** and set up **custom shader code** for the vertex and fragment stages.

### Existing mods

By itself, Flywheel does nothing as it's just a library. Here's a list of mods using Flywheel:

- [Vanillin](https://modrinth.com/mod/flw-vanillin)
- [Create](https://modrinth.com/mod/create/) (and associated addons)
- [Valkries Skies 2](https://modrinth.com/mod/valkyrien-skies)

:::note
Flywheel is not available directly on CurseForge or Modrinth. Instead, mods using it needs to bundle it in their .jar file.
:::
