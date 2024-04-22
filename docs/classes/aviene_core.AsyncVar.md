[@aviene/node-typescript-libs - v0.0.0](../README.md) / [Exports](../modules.md) / [@aviene/core](../modules/aviene_core.md) / AsyncVar

# Class: AsyncVar\<T\>

[@aviene/core](../modules/aviene_core.md).AsyncVar

Represents an asynchronous variable.

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](aviene_core.AsyncVar.md#constructor)

### Properties

- [name](aviene_core.AsyncVar.md#name)
- [symbol](aviene_core.AsyncVar.md#symbol)

### Methods

- [exists](aviene_core.AsyncVar.md#exists)
- [get](aviene_core.AsyncVar.md#get)
- [set](aviene_core.AsyncVar.md#set)

## Constructors

### constructor

• **new AsyncVar**\<`T`\>(`name`): [`AsyncVar`](aviene_core.AsyncVar.md)\<`T`\>

Constructor for RequestVariable class.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the variable. |

#### Returns

[`AsyncVar`](aviene_core.AsyncVar.md)\<`T`\>

#### Defined in

[core/src/async-hooks/async-var.ts:13](https://github.com/stefan-karlsson/node-typescript-libs/blob/405ef74cb6fa38b2c9adb90061df6f2588c4f1ca/packages/core/src/async-hooks/async-var.ts#L13)

## Properties

### name

• `Readonly` **name**: `string`

#### Defined in

[core/src/async-hooks/async-var.ts:7](https://github.com/stefan-karlsson/node-typescript-libs/blob/405ef74cb6fa38b2c9adb90061df6f2588c4f1ca/packages/core/src/async-hooks/async-var.ts#L7)

___

### symbol

• `Private` `Readonly` **symbol**: `symbol`

#### Defined in

[core/src/async-hooks/async-var.ts:8](https://github.com/stefan-karlsson/node-typescript-libs/blob/405ef74cb6fa38b2c9adb90061df6f2588c4f1ca/packages/core/src/async-hooks/async-var.ts#L8)

## Methods

### exists

▸ **exists**(): `boolean`

Check if the variable exists in the current [RequestContext](aviene_core.AsyncScope.md).

#### Returns

`boolean`

True if the variable exists, false otherwise.

#### Defined in

[core/src/async-hooks/async-var.ts:47](https://github.com/stefan-karlsson/node-typescript-libs/blob/405ef74cb6fa38b2c9adb90061df6f2588c4f1ca/packages/core/src/async-hooks/async-var.ts#L47)

___

### get

▸ **get**(): `T`

Get the value of the variable from the current [RequestContext](aviene_core.AsyncScope.md).

#### Returns

`T`

The value of the variable.

**`Throws`**

Error if the variable does not exist.

#### Defined in

[core/src/async-hooks/async-var.ts:33](https://github.com/stefan-karlsson/node-typescript-libs/blob/405ef74cb6fa38b2c9adb90061df6f2588c4f1ca/packages/core/src/async-hooks/async-var.ts#L33)

___

### set

▸ **set**(`value`): `void`

Set the value of the variable in the current scope.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to set. |

#### Returns

`void`

#### Defined in

[core/src/async-hooks/async-var.ts:22](https://github.com/stefan-karlsson/node-typescript-libs/blob/405ef74cb6fa38b2c9adb90061df6f2588c4f1ca/packages/core/src/async-hooks/async-var.ts#L22)
