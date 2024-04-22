[@aviene/node-typescript-libs - v0.0.0](../README.md) / [Exports](../modules.md) / [@aviene/exceptions](../modules/aviene_exceptions.md) / ArgumentOutOfRangeException

# Class: ArgumentOutOfRangeException

[@aviene/exceptions](../modules/aviene_exceptions.md).ArgumentOutOfRangeException

Used to indicate that an argument is out of allowed range
(for example: incorrect string/array length, number not in allowed min/max range etc)

 ArgumentOutOfRangeException

## Hierarchy

- [`ExceptionBase`](aviene_exceptions.ExceptionBase.md)

  ↳ **`ArgumentOutOfRangeException`**

## Table of contents

### Constructors

- [constructor](aviene_exceptions.ArgumentOutOfRangeException.md#constructor)

### Properties

- [cause](aviene_exceptions.ArgumentOutOfRangeException.md#cause)
- [code](aviene_exceptions.ArgumentOutOfRangeException.md#code)
- [correlationId](aviene_exceptions.ArgumentOutOfRangeException.md#correlationid)
- [message](aviene_exceptions.ArgumentOutOfRangeException.md#message)
- [metadata](aviene_exceptions.ArgumentOutOfRangeException.md#metadata)
- [name](aviene_exceptions.ArgumentOutOfRangeException.md#name)
- [stack](aviene_exceptions.ArgumentOutOfRangeException.md#stack)
- [prepareStackTrace](aviene_exceptions.ArgumentOutOfRangeException.md#preparestacktrace)
- [stackTraceLimit](aviene_exceptions.ArgumentOutOfRangeException.md#stacktracelimit)

### Methods

- [toJSON](aviene_exceptions.ArgumentOutOfRangeException.md#tojson)
- [captureStackTrace](aviene_exceptions.ArgumentOutOfRangeException.md#capturestacktrace)

## Constructors

### constructor

• **new ArgumentOutOfRangeException**(`message`, `cause?`, `metadata?`): [`ArgumentOutOfRangeException`](aviene_exceptions.ArgumentOutOfRangeException.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | - |
| `cause?` | `Error` | - |
| `metadata?` | `unknown` | **BE CAREFUL** not to include sensitive info in 'metadata' to prevent leaks since all exception's data will end up in application's log files. Only include non-sensitive info that may help with debugging. |

#### Returns

[`ArgumentOutOfRangeException`](aviene_exceptions.ArgumentOutOfRangeException.md)

#### Inherited from

[ExceptionBase](aviene_exceptions.ExceptionBase.md).[constructor](aviene_exceptions.ExceptionBase.md#constructor)

#### Defined in

[packages/exceptions/src/exception.base.ts:33](https://github.com/stefan-karlsson/node-typescript-libs/blob/619c6ebb867b1272368716173fcd679257b4bf78/packages/exceptions/src/exception.base.ts#L33)

## Properties

### cause

• `Optional` `Readonly` **cause**: `Error`

#### Inherited from

[ExceptionBase](aviene_exceptions.ExceptionBase.md).[cause](aviene_exceptions.ExceptionBase.md#cause)

#### Defined in

[packages/exceptions/src/exception.base.ts:21](https://github.com/stefan-karlsson/node-typescript-libs/blob/619c6ebb867b1272368716173fcd679257b4bf78/packages/exceptions/src/exception.base.ts#L21)

___

### code

• `Readonly` **code**: ``"GENERIC.ARGUMENT_OUT_OF_RANGE"``

#### Overrides

[ExceptionBase](aviene_exceptions.ExceptionBase.md).[code](aviene_exceptions.ExceptionBase.md#code)

#### Defined in

[packages/exceptions/src/exceptions/argument-out-of-range.exception.ts:13](https://github.com/stefan-karlsson/node-typescript-libs/blob/619c6ebb867b1272368716173fcd679257b4bf78/packages/exceptions/src/exceptions/argument-out-of-range.exception.ts#L13)

___

### correlationId

• `Readonly` **correlationId**: `string`

#### Inherited from

[ExceptionBase](aviene_exceptions.ExceptionBase.md).[correlationId](aviene_exceptions.ExceptionBase.md#correlationid)

#### Defined in

[packages/exceptions/src/exception.base.ts:19](https://github.com/stefan-karlsson/node-typescript-libs/blob/619c6ebb867b1272368716173fcd679257b4bf78/packages/exceptions/src/exception.base.ts#L19)

___

### message

• **message**: `string`

#### Inherited from

[ExceptionBase](aviene_exceptions.ExceptionBase.md).[message](aviene_exceptions.ExceptionBase.md#message)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1077

___

### metadata

• `Readonly` **metadata**: `unknown`

#### Inherited from

[ExceptionBase](aviene_exceptions.ExceptionBase.md).[metadata](aviene_exceptions.ExceptionBase.md#metadata)

#### Defined in

[packages/exceptions/src/exception.base.ts:20](https://github.com/stefan-karlsson/node-typescript-libs/blob/619c6ebb867b1272368716173fcd679257b4bf78/packages/exceptions/src/exception.base.ts#L20)

___

### name

• **name**: `string`

#### Inherited from

[ExceptionBase](aviene_exceptions.ExceptionBase.md).[name](aviene_exceptions.ExceptionBase.md#name)

#### Defined in

node_modules/.pnpm/typescript@5.4.5/node_modules/typescript/lib/lib.es5.d.ts:1076

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[ExceptionBase](aviene_exceptions.ExceptionBase.md).[stack](aviene_exceptions.ExceptionBase.md#stack)

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

[ExceptionBase](aviene_exceptions.ExceptionBase.md).[prepareStackTrace](aviene_exceptions.ExceptionBase.md#preparestacktrace)

#### Defined in

node_modules/.pnpm/@types+node@20.12.7/node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[ExceptionBase](aviene_exceptions.ExceptionBase.md).[stackTraceLimit](aviene_exceptions.ExceptionBase.md#stacktracelimit)

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

#### Inherited from

[ExceptionBase](aviene_exceptions.ExceptionBase.md).[toJSON](aviene_exceptions.ExceptionBase.md#tojson)

#### Defined in

[packages/exceptions/src/exception.base.ts:54](https://github.com/stefan-karlsson/node-typescript-libs/blob/619c6ebb867b1272368716173fcd679257b4bf78/packages/exceptions/src/exception.base.ts#L54)

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

[ExceptionBase](aviene_exceptions.ExceptionBase.md).[captureStackTrace](aviene_exceptions.ExceptionBase.md#capturestacktrace)

#### Defined in

node_modules/.pnpm/@types+node@20.12.7/node_modules/@types/node/globals.d.ts:21
