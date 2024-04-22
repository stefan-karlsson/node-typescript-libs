[@aviene/node-typescript-libs - v0.0.0](../README.md) / [Exports](../modules.md) / [@aviene/exceptions](../modules/aviene_exceptions.md) / ExceptionBase

# Class: ExceptionBase

[@aviene/exceptions](../modules/aviene_exceptions.md).ExceptionBase

Base class for custom exceptions.

**`Abstract`**

ExceptionBase

## Hierarchy

- `Error`

  ↳ **`ExceptionBase`**

  ↳↳ [`ArgumentInvalidException`](aviene_exceptions.ArgumentInvalidException.md)

  ↳↳ [`ArgumentNotProvidedException`](aviene_exceptions.ArgumentNotProvidedException.md)

  ↳↳ [`ArgumentOutOfRangeException`](aviene_exceptions.ArgumentOutOfRangeException.md)

  ↳↳ [`ConflictException`](aviene_exceptions.ConflictException.md)

  ↳↳ [`InternalServerErrorException`](aviene_exceptions.InternalServerErrorException.md)

  ↳↳ [`NotFoundException`](aviene_exceptions.NotFoundException.md)

## Table of contents

### Constructors

- [constructor](aviene_exceptions.ExceptionBase.md#constructor)

### Properties

- [cause](aviene_exceptions.ExceptionBase.md#cause)
- [code](aviene_exceptions.ExceptionBase.md#code)
- [correlationId](aviene_exceptions.ExceptionBase.md#correlationid)
- [message](aviene_exceptions.ExceptionBase.md#message)
- [metadata](aviene_exceptions.ExceptionBase.md#metadata)
- [name](aviene_exceptions.ExceptionBase.md#name)
- [stack](aviene_exceptions.ExceptionBase.md#stack)
- [prepareStackTrace](aviene_exceptions.ExceptionBase.md#preparestacktrace)
- [stackTraceLimit](aviene_exceptions.ExceptionBase.md#stacktracelimit)

### Methods

- [toJSON](aviene_exceptions.ExceptionBase.md#tojson)
- [captureStackTrace](aviene_exceptions.ExceptionBase.md#capturestacktrace)

## Constructors

### constructor

• **new ExceptionBase**(`message`, `cause?`, `metadata?`): [`ExceptionBase`](aviene_exceptions.ExceptionBase.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | - |
| `cause?` | `Error` | - |
| `metadata?` | `unknown` | **BE CAREFUL** not to include sensitive info in 'metadata' to prevent leaks since all exception's data will end up in application's log files. Only include non-sensitive info that may help with debugging. |

#### Returns

[`ExceptionBase`](aviene_exceptions.ExceptionBase.md)

#### Overrides

Error.constructor

#### Defined in

[packages/exceptions/src/exception.base.ts:33](https://github.com/stefan-karlsson/node-typescript-libs/blob/e87c8dfc363e47e60139fe98b98f13d9e78ac0d9/packages/exceptions/src/exception.base.ts#L33)

## Properties

### cause

• `Optional` `Readonly` **cause**: `Error`

#### Overrides

Error.cause

#### Defined in

[packages/exceptions/src/exception.base.ts:21](https://github.com/stefan-karlsson/node-typescript-libs/blob/e87c8dfc363e47e60139fe98b98f13d9e78ac0d9/packages/exceptions/src/exception.base.ts#L21)

___

### code

• `Abstract` **code**: `string`

#### Defined in

[packages/exceptions/src/exception.base.ts:23](https://github.com/stefan-karlsson/node-typescript-libs/blob/e87c8dfc363e47e60139fe98b98f13d9e78ac0d9/packages/exceptions/src/exception.base.ts#L23)

___

### correlationId

• `Readonly` **correlationId**: `string`

#### Defined in

[packages/exceptions/src/exception.base.ts:19](https://github.com/stefan-karlsson/node-typescript-libs/blob/e87c8dfc363e47e60139fe98b98f13d9e78ac0d9/packages/exceptions/src/exception.base.ts#L19)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1077

___

### metadata

• `Readonly` **metadata**: `unknown`

#### Defined in

[packages/exceptions/src/exception.base.ts:20](https://github.com/stefan-karlsson/node-typescript-libs/blob/e87c8dfc363e47e60139fe98b98f13d9e78ac0d9/packages/exceptions/src/exception.base.ts#L20)

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1076

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1078

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/.pnpm/@types+node@20.12.7/node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/.pnpm/@types+node@20.12.7/node_modules/@types/node/globals.d.ts:30

## Methods

### toJSON

▸ **toJSON**(): [`SerializedException`](../interfaces/aviene_exceptions.SerializedException.md)

By default in NodeJS Error objects are not
serialized properly when sending plain objects
to external processes. This method is a workaround.
Keep in mind not to return a stack trace to user when in production.
https://iaincollins.medium.com/error-handling-in-javascript-a6172ccdf9af

#### Returns

[`SerializedException`](../interfaces/aviene_exceptions.SerializedException.md)

#### Defined in

[packages/exceptions/src/exception.base.ts:54](https://github.com/stefan-karlsson/node-typescript-libs/blob/e87c8dfc363e47e60139fe98b98f13d9e78ac0d9/packages/exceptions/src/exception.base.ts#L54)

___

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/.pnpm/@types+node@20.12.7/node_modules/@types/node/globals.d.ts:21
