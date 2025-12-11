---
title: colorwheel.properties
description: Overview of the colorwheel.properties
sidebar:
    label: colorwheel.properties
    order: 4
---

### blend

```
blend.<program> = <off | src dst srcA dstA>
```
```
blend.<program>.<buffer> = <off | src dst srcA dstA>
```

This property is the same as Iris' [blend property](https://shaders.properties/current/reference/shadersproperties/rendering/#blend).  
This is kept separate from `shader.properties` to allow users of creating patches without overriding any shaderpack file.

### shadow

```
shadow.enabled = <true | false>
```

Enable/disable shadows from Flywheel entities, block entities and effects.

### oit

**• Toggle:**

```
oit = <true | false>
```
```
oit.<program group> = <true | false>
```

Enable or disable the OIT.  
`program group`: `gbuffers` or `shadow`.  

**• Coefficients Buffers:**

```
oit.<program group>.coefficientRanks = <rank0>[,rank1][,rank2][,...]
```

Declares the coefficients ranks.  
`program group`: `gbuffers` or `shadow`.  
`rank`: the rank of the coefficients buffer, between 1 and 3.  

**• Accumulation Buffers:**

```
oit.<program group>.<buffer> = <coeffBufferID | frontmost>
```

Sets the transparency mode of the accumulate buffer associated with the buffer.   
`program group`: `gbuffers` or `shadow`.  
`buffer`: `colortexN` with `gbuffers`, `shadowcolorN` with `shadow`.  
`coeffBufferID`: the index of the coefficient buffer declared with `coefficientRanks`.  

```
oit.<program group>.<buffer>.format = <image format>
```

Sets the texture format for the accumulate buffer associated with the buffer.   
`program group`: `gbuffers` or `shadow`.  
`buffer`: `colortexN` with `gbuffers`, `shadowcolorN` with `shadow`.  
`image format`: the [image format](https://shaders.properties/current/reference/buffers/image_format/) of the accumulate buffer.

:::caution[Warning]
The image format needs to have an alpha channel. 
:::
