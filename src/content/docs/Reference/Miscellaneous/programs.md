---
title: Programs
description: Overview of the programs
sidebar:
    label: Programs
    order: 1
---

Programs are selected based on the [transparency](https://github.com/Engine-Room/Flywheel/blob/dc5bc8e64976c69b38abb6965d5cd9033e5a8808/common/src/api/java/dev/engine_room/flywheel/api/material/Transparency.java) of the Flywheel material.

`clrwl_gbuffers` is the only required program, other gbuffer programs fallback to it.  
`clrwl_shadow` is optional: if absent, Flywheel instances won't be rendered in the shadow pass.

| Gbuffer Program                 | Transparency                                        | Default blending mode                                         |
|---------------------------------|-----------------------------------------------------|---------------------------------------------------------------|
| `clrwl_gbuffers`                | opaque                                              | -                                                             |
| `clrwl_gbuffers_additive`       | additive                                            | `ONE       ONE                 ONE       ONE                ` |
| `clrwl_gbuffers_lightning`      | lightning                                           | `SRC_ALPHA ONE                 ONE       ONE                ` |
| `clrwl_gbuffers_glint`          | glint                                               | `SRC_COLOR ONE                 ZERO      ONE                ` |
| `clrwl_gbuffers_translucent`    | translucent, order independant                      | `SRC_ALPHA ONE_MINUS_SRC_ALPHA ONE       ONE_MINUS_SRC_ALPHA` |
| `clrwl_gbuffers_damagedblock`   | crumbling                                           | `DST_COLOR SRC_COLOR           ONE       ZERO               ` |

By default, all shadow programs have their blending disabled.  

| Shadow Program                  | Transparency                                        |
|---------------------------------|-----------------------------------------------------|
| `clrwl_shadow`                  | opaque                                              |
| `clrwl_shadow_additive`         | additive                                            |
| `clrwl_shadow_lightning`        | lightning                                           |
| `clrwl_shadow_glint`            | glint                                               |
| `clrwl_shadow_translucent`      | translucent, order independant                      |

:::caution[Warning]
Even though missing gbuffers programs fallback to `clrwl_gbuffers`, they retain their default blending mode.
:::

:::caution[Warning]
Order Independant blending is more complicated than a simple blending mode, refer to the [Order Independant Transparency page](/colorwheel/whatis/oit/).
:::

### Rendering Order

**Opaques**, **additives**, **lightnings** and **glint** geometries are rendered before the **block entities**.  
**Translucents** geometries are rendered before the **translucent terrain**.  

:::note
The rendering order causes translucent terrain (like water) to be invisible when viewed through Flywheel translucent geometry.
:::
