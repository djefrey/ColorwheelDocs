---
title: Macros
description: Overview of the macros
sidebar:
    label: Macros
    order: 5
---

### HAS_COLORWHEEL

When Colorwheel is **installed**, `HAS_COLORWHEEL` is defined in shaders and properties files.  

### COLORWHEEL_VERSION

The current Colorwheel version, encoded in a 122 format (1 major, 2 minor, 2 incremental).  

### Render Stages

Colorwheel provides custom [`renderStage`](https://shaders.properties/current/reference/uniforms/rendering/#renderstage) values:

Define                                  | Description
----------------------------------------|--------------
`CLRWL_RENDER_STAGE_SOLID`              | Opaque, additive, lightning and glint geometries
`CLRWL_RENDER_STAGE_TRANSLUCENT`        | Non-OIT translucent geometries
`CLRWL_RENDER_STAGE_OIT_DEPTH_RANGE`    | First phase of OIT : computes the translucents depth range
`CLRWL_RENDER_STAGE_OIT_COEFFICIENTS`   | Second phase of OIT : computes the transmittance-over-depth functions
`CLRWL_RENDER_STAGE_OIT_ACCUMULATE`     | Third phase of OIT : accumulate all weighted translucents using additive blending
`CLRWL_RENDER_STAGE_CRUMBLING`          | Crumbling geometries
