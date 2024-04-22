[@aviene/node-typescript-libs - v0.0.0](../README.md) / [Exports](../modules.md) / @aviene/core

# Module: @aviene/core

## Table of contents

### Classes

- [AppFactoryStatic](../classes/aviene_core.AppFactoryStatic.md)
- [AsyncScope](../classes/aviene_core.AsyncScope.md)
- [AsyncVar](../classes/aviene_core.AsyncVar.md)
- [CreateAppContextOptions](../classes/aviene_core.CreateAppContextOptions.md)
- [Entity](../classes/aviene_core.Entity.md)

### Interfaces

- [BaseEntityProps](../interfaces/aviene_core.BaseEntityProps.md)
- [CreateEntityProps](../interfaces/aviene_core.CreateEntityProps.md)

### Type Aliases

- [AggregateID](aviene_core.md#aggregateid)
- [ObjectLiteral](aviene_core.md#objectliteral)

### Variables

- [AppFactory](aviene_core.md#appfactory)

## Type Aliases

### AggregateID

Ƭ **AggregateID**: `string`

#### Defined in

[core/src/entity.base.ts:8](https://github.com/stefan-karlsson/node-typescript-libs/blob/0b1191dea1016dc37651a13cad55c959f6f5b0c6/packages/core/src/entity.base.ts#L8)

___

### ObjectLiteral

Ƭ **ObjectLiteral**: `Record`\<`string`, `unknown`\>

Data type that is used to define objects in JavaScript

#### Defined in

[common/src/types/object-literal.type.ts:4](https://github.com/stefan-karlsson/node-typescript-libs/blob/0b1191dea1016dc37651a13cad55c959f6f5b0c6/packages/common/src/types/object-literal.type.ts#L4)

## Variables

### AppFactory

• `Const` **AppFactory**: [`AppFactoryStatic`](../classes/aviene_core.AppFactoryStatic.md)

Use AppFactory to create an application instance.

### Specifying an entry module

Pass the required *root module* for the application via the module parameter.
By convention, it is usually called `ApplicationModule`.  Starting with this
module, Nest assembles and initiates the code needed to launch your
application.

**`Public Api`**

#### Defined in

[core/src/request-context/app.factory.ts:27](https://github.com/stefan-karlsson/node-typescript-libs/blob/0b1191dea1016dc37651a13cad55c959f6f5b0c6/packages/core/src/request-context/app.factory.ts#L27)
