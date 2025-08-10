---
title: What is Colorwheel ?
description: Explains what Colorwheel is about
sidebar:
    label: Colorwheel
    order: 2
---

[Colorwheel](https://modrinth.com/mod/colorwheel) is a mod that provides a custom Flywheel backend, replacing Flywheel's rendering engine. This custom backend acts as an extension on top of [Iris](https://modrinth.com/mod/iris) to make it compatible with Flywheel. This extension lets shaderpack developers build shaderpacks that are compatible with Flywheel, allowing players to enjoy a beautiful game without it turning into a slideshow when inside a Create factory.

### The Extension

Colorwheel's extension consists of a set of programs that are merged with Flywheel shaders at runtime. It aims to hide Flywheel's internal details when unnecessary, simplifying the process of adapting shaderpacks as much as possible.

### Differences with Iris/Oculus Flywheel Compat

[Iris/Oculus Flywheel Compat](https://modrinth.com/mod/iris-flw-compat) is an older mod that also makes shaderpacks "compatible" with Flywheel. It does so by generating patches on top of the `gbuffers_blocks` and `shadow` programs to insert Flywheel's shader code.

This approach was reasonable in Flywheel 0.6 (version using by Create 0.5) as Flywheel shaders were very basic (10 lines of codes). However, Flywheel 1.0 (used by Create 6) is way more complex:

- A **material** system where mod developers can specify how an instance is rendered (custom shaders, transparency mode, depth test, overlay usage, etc.)
- Lighting is computed on the GPU for embedded environments (like Create contraptions)
- **Order Independant Transparency** (OIT) is used to render correctly translucent geometry

All these features make Flywheel's rendering much more complex. While automated patching may work with forward rendering pipelines (like Complementary), shaderpacks using more advanced techniques (like Bliss) will encounter issues.

This approach is also incompatible with the custom fragment and lighting shaders. It also doesn't work with the OIT system, causing translucent geometry to not render correctly depending on the order. All of that makes this compatibility mode **partial** at best.
