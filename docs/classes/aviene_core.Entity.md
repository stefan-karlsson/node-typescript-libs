[@aviene/node-typescript-libs - v0.0.0](../README.md) / [Exports](../modules.md) / [@aviene/core](../modules/aviene_core.md) / Entity

# Class: Entity\<EntityProps\>

[@aviene/core](../modules/aviene_core.md).Entity

## Type parameters

| Name |
| :------ |
| `EntityProps` |

## Table of contents

### Constructors

- [constructor](aviene_core.Entity.md#constructor)

### Properties

- [\_createdAt](aviene_core.Entity.md#_createdat)
- [\_id](aviene_core.Entity.md#_id)
- [\_updatedAt](aviene_core.Entity.md#_updatedat)
- [props](aviene_core.Entity.md#props)

### Accessors

- [createdAt](aviene_core.Entity.md#createdat)
- [id](aviene_core.Entity.md#id)
- [updatedAt](aviene_core.Entity.md#updatedat)

### Methods

- [equals](aviene_core.Entity.md#equals)
- [getProps](aviene_core.Entity.md#getprops)
- [setId](aviene_core.Entity.md#setid)
- [toObject](aviene_core.Entity.md#toobject)
- [validate](aviene_core.Entity.md#validate)
- [validateProps](aviene_core.Entity.md#validateprops)
- [isEntity](aviene_core.Entity.md#isentity)

## Constructors

### constructor

• **new Entity**\<`EntityProps`\>(`«destructured»`): [`Entity`](aviene_core.Entity.md)\<`EntityProps`\>

#### Type parameters

| Name |
| :------ |
| `EntityProps` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`CreateEntityProps`](../interfaces/aviene_core.CreateEntityProps.md)\<`EntityProps`\> |

#### Returns

[`Entity`](aviene_core.Entity.md)\<`EntityProps`\>

#### Defined in

[core/src/entity.base.ts:35](https://github.com/stefan-karlsson/node-typescript-libs/blob/2071c6c6228276c027222437a50e69e67ef06a3a/packages/core/src/entity.base.ts#L35)

## Properties

### \_createdAt

• `Private` `Readonly` **\_createdAt**: `Date`

#### Defined in

[core/src/entity.base.ts:23](https://github.com/stefan-karlsson/node-typescript-libs/blob/2071c6c6228276c027222437a50e69e67ef06a3a/packages/core/src/entity.base.ts#L23)

___

### \_id

• `Protected` `Abstract` **\_id**: `string`

ID is set in the concrete entity implementation to support
different ID types depending on your needs.
For example it could be a UUID for aggregate root,
and shortid / nanoid for child entities.

#### Defined in

[core/src/entity.base.ts:33](https://github.com/stefan-karlsson/node-typescript-libs/blob/2071c6c6228276c027222437a50e69e67ef06a3a/packages/core/src/entity.base.ts#L33)

___

### \_updatedAt

• `Private` **\_updatedAt**: `Date`

#### Defined in

[core/src/entity.base.ts:25](https://github.com/stefan-karlsson/node-typescript-libs/blob/2071c6c6228276c027222437a50e69e67ef06a3a/packages/core/src/entity.base.ts#L25)

___

### props

• `Protected` `Readonly` **props**: `EntityProps`

#### Defined in

[core/src/entity.base.ts:21](https://github.com/stefan-karlsson/node-typescript-libs/blob/2071c6c6228276c027222437a50e69e67ef06a3a/packages/core/src/entity.base.ts#L21)

## Accessors

### createdAt

• `get` **createdAt**(): `Date`

#### Returns

`Date`

#### Defined in

[core/src/entity.base.ts:54](https://github.com/stefan-karlsson/node-typescript-libs/blob/2071c6c6228276c027222437a50e69e67ef06a3a/packages/core/src/entity.base.ts#L54)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[core/src/entity.base.ts:50](https://github.com/stefan-karlsson/node-typescript-libs/blob/2071c6c6228276c027222437a50e69e67ef06a3a/packages/core/src/entity.base.ts#L50)

___

### updatedAt

• `get` **updatedAt**(): `Date`

#### Returns

`Date`

#### Defined in

[core/src/entity.base.ts:58](https://github.com/stefan-karlsson/node-typescript-libs/blob/2071c6c6228276c027222437a50e69e67ef06a3a/packages/core/src/entity.base.ts#L58)

## Methods

### equals

▸ **equals**(`object?`): `boolean`

Checks if two entities are the same Entity by comparing ID field.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object?` | [`Entity`](aviene_core.Entity.md)\<`EntityProps`\> | Entity |

#### Returns

`boolean`

#### Defined in

[core/src/entity.base.ts:70](https://github.com/stefan-karlsson/node-typescript-libs/blob/2071c6c6228276c027222437a50e69e67ef06a3a/packages/core/src/entity.base.ts#L70)

___

### getProps

▸ **getProps**(): `EntityProps` & [`BaseEntityProps`](../interfaces/aviene_core.BaseEntityProps.md)

Returns entity properties.

#### Returns

`EntityProps` & [`BaseEntityProps`](../interfaces/aviene_core.BaseEntityProps.md)

{Props & EntityProps}

**`Memberof`**

Entity

#### Defined in

[core/src/entity.base.ts:91](https://github.com/stefan-karlsson/node-typescript-libs/blob/2071c6c6228276c027222437a50e69e67ef06a3a/packages/core/src/entity.base.ts#L91)

___

### setId

▸ **setId**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[core/src/entity.base.ts:118](https://github.com/stefan-karlsson/node-typescript-libs/blob/2071c6c6228276c027222437a50e69e67ef06a3a/packages/core/src/entity.base.ts#L118)

___

### toObject

▸ **toObject**(): `unknown`

Convert an Entity and all sub-entities/Value Objects it
contains to a plain object with primitive types. Can be
useful when logging an entity during testing/debugging

#### Returns

`unknown`

#### Defined in

[core/src/entity.base.ts:106](https://github.com/stefan-karlsson/node-typescript-libs/blob/2071c6c6228276c027222437a50e69e67ef06a3a/packages/core/src/entity.base.ts#L106)

___

### validate

▸ **validate**(): `void`

There are certain rules that always have to be true (invariants)
for each entity. Validate method is called every time before
saving an entity to the database to make sure those rules are respected.

#### Returns

`void`

#### Defined in

[core/src/entity.base.ts:143](https://github.com/stefan-karlsson/node-typescript-libs/blob/2071c6c6228276c027222437a50e69e67ef06a3a/packages/core/src/entity.base.ts#L143)

___

### validateProps

▸ **validateProps**(`props`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `EntityProps` |

#### Returns

`void`

#### Defined in

[core/src/entity.base.ts:122](https://github.com/stefan-karlsson/node-typescript-libs/blob/2071c6c6228276c027222437a50e69e67ef06a3a/packages/core/src/entity.base.ts#L122)

___

### isEntity

▸ **isEntity**(`entity`): entity is Entity\<unknown\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `unknown` |

#### Returns

entity is Entity\<unknown\>

#### Defined in

[core/src/entity.base.ts:62](https://github.com/stefan-karlsson/node-typescript-libs/blob/2071c6c6228276c027222437a50e69e67ef06a3a/packages/core/src/entity.base.ts#L62)
