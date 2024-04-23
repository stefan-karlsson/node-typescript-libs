[@aviene/node-typescript-libs - v0.0.0](../README.md) / [Exports](../modules.md) / [@aviene/core](../modules/aviene_core.md) / AppFactoryStatic

# Class: AppFactoryStatic

[@aviene/core](../modules/aviene_core.md).AppFactoryStatic

## Table of contents

### Constructors

- [constructor](aviene_core.AppFactoryStatic.md#constructor)

### Methods

- [createApplicationContext](aviene_core.AppFactoryStatic.md#createapplicationcontext)

## Constructors

### constructor

• **new AppFactoryStatic**(): [`AppFactoryStatic`](aviene_core.AppFactoryStatic.md)

#### Returns

[`AppFactoryStatic`](aviene_core.AppFactoryStatic.md)

## Methods

### createApplicationContext

▸ **createApplicationContext**(`_entryModule`, `_options?`): `void`

Creates an instance of NestApplicationContext.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_entryModule` | `any` |
| `_options?` | [`CreateAppContextOptions`](aviene_core.CreateAppContextOptions.md) |

#### Returns

`void`

A promise that, when resolved,
contains a reference to the NestApplicationContext instance.

#### Defined in

[core/src/request-context/app.factory.ts:13](https://github.com/stefan-karlsson/node-typescript-libs/blob/2f811d64a4d61b5ce3a9a33e69804119c4e3dec6/packages/core/src/request-context/app.factory.ts#L13)
