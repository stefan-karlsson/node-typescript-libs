[@aviene/node-typescript-libs - v0.0.0](../README.md) / [Exports](../modules.md) / [@aviene/common](../modules/aviene_common.md) / Logger

# Class: Logger

[@aviene/common](../modules/aviene_common.md).Logger

## Implements

- [`LoggerService`](../interfaces/aviene_common.LoggerService.md)

## Table of contents

### Constructors

- [constructor](aviene_common.Logger.md#constructor)

### Properties

- [context](aviene_common.Logger.md#context)
- [localInstanceRef](aviene_common.Logger.md#localinstanceref)
- [options](aviene_common.Logger.md#options)
- [isBufferAttached](aviene_common.Logger.md#isbufferattached)
- [logBuffer](aviene_common.Logger.md#logbuffer)
- [logLevels](aviene_common.Logger.md#loglevels)
- [staticInstanceRef](aviene_common.Logger.md#staticinstanceref)
- [wrapBuffer](aviene_common.Logger.md#wrapbuffer)

### Accessors

- [localInstance](aviene_common.Logger.md#localinstance)

### Methods

- [debug](aviene_common.Logger.md#debug)
- [error](aviene_common.Logger.md#error)
- [fatal](aviene_common.Logger.md#fatal)
- [log](aviene_common.Logger.md#log)
- [registerLocalInstanceRef](aviene_common.Logger.md#registerlocalinstanceref)
- [verbose](aviene_common.Logger.md#verbose)
- [warn](aviene_common.Logger.md#warn)
- [attachBuffer](aviene_common.Logger.md#attachbuffer)
- [debug](aviene_common.Logger.md#debug-1)
- [detachBuffer](aviene_common.Logger.md#detachbuffer)
- [error](aviene_common.Logger.md#error-1)
- [fatal](aviene_common.Logger.md#fatal-1)
- [flush](aviene_common.Logger.md#flush)
- [getTimestamp](aviene_common.Logger.md#gettimestamp)
- [isLevelEnabled](aviene_common.Logger.md#islevelenabled)
- [log](aviene_common.Logger.md#log-1)
- [overrideLogger](aviene_common.Logger.md#overridelogger)
- [verbose](aviene_common.Logger.md#verbose-1)
- [warn](aviene_common.Logger.md#warn-1)

## Constructors

### constructor

• **new Logger**(`context?`, `options?`): [`Logger`](aviene_common.Logger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `string` |
| `options?` | `Object` |
| `options.timestamp?` | `boolean` |

#### Returns

[`Logger`](aviene_common.Logger.md)

#### Defined in

[common/src/logging/logger.service.ts:77](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L77)

## Properties

### context

• `Protected` `Optional` **context**: `string`

#### Defined in

[common/src/logging/logger.service.ts:75](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L75)

___

### localInstanceRef

• `Protected` `Optional` **localInstanceRef**: [`LoggerService`](../interfaces/aviene_common.LoggerService.md)

#### Defined in

[common/src/logging/logger.service.ts:74](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L74)

___

### options

• `Protected` **options**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `timestamp?` | `boolean` |

#### Defined in

[common/src/logging/logger.service.ts:76](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L76)

___

### isBufferAttached

▪ `Private` `Static` **isBufferAttached**: `boolean`

#### Defined in

[common/src/logging/logger.service.ts:72](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L72)

___

### logBuffer

▪ `Protected` `Static` **logBuffer**: `LogBufferRecord`[]

#### Defined in

[common/src/logging/logger.service.ts:69](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L69)

___

### logLevels

▪ `Protected` `Static` `Optional` **logLevels**: [`LogLevel`](../modules/aviene_common.md#loglevel)[]

#### Defined in

[common/src/logging/logger.service.ts:71](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L71)

___

### staticInstanceRef

▪ `Protected` `Static` `Optional` **staticInstanceRef**: [`LoggerService`](../interfaces/aviene_common.LoggerService.md) = `DEFAULT_LOGGER`

#### Defined in

[common/src/logging/logger.service.ts:70](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L70)

___

### wrapBuffer

▪ `Private` `Static` **wrapBuffer**: `MethodDecorator`

#### Defined in

[common/src/logging/logger.service.ts:155](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L155)

## Accessors

### localInstance

• `get` **localInstance**(): [`LoggerService`](../interfaces/aviene_common.LoggerService.md)

#### Returns

[`LoggerService`](../interfaces/aviene_common.LoggerService.md)

#### Defined in

[common/src/logging/logger.service.ts:86](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L86)

## Methods

### debug

▸ **debug**(`message`, `context?`): `void`

Write a 'debug' level log.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `context?` | `string` |

#### Returns

`void`

#### Implementation of

[LoggerService](../interfaces/aviene_common.LoggerService.md).[debug](../interfaces/aviene_common.LoggerService.md#debug)

#### Defined in

[common/src/logging/logger.service.ts:282](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L282)

▸ **debug**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | [...unknown[], `string`] |

#### Returns

`void`

#### Implementation of

Logger.debug

#### Defined in

[common/src/logging/logger.service.ts:283](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L283)

___

### error

▸ **error**(`message`, `stack?`, `context?`): `void`

Write an 'error' level log.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `stack?` | `string` |
| `context?` | `string` |

#### Returns

`void`

#### Implementation of

[LoggerService](../interfaces/aviene_common.LoggerService.md).[error](../interfaces/aviene_common.LoggerService.md#error)

#### Defined in

[common/src/logging/logger.service.ts:242](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L242)

▸ **error**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | [...unknown[], `string`, `string`] |

#### Returns

`void`

#### Implementation of

Logger.error

#### Defined in

[common/src/logging/logger.service.ts:243](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L243)

___

### fatal

▸ **fatal**(`message`, `context?`): `void`

Write a 'fatal' level log.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `context?` | `string` |

#### Returns

`void`

#### Implementation of

[LoggerService](../interfaces/aviene_common.LoggerService.md).[fatal](../interfaces/aviene_common.LoggerService.md#fatal)

#### Defined in

[common/src/logging/logger.service.ts:308](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L308)

▸ **fatal**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | [...unknown[], `string`] |

#### Returns

`void`

#### Implementation of

Logger.fatal

#### Defined in

[common/src/logging/logger.service.ts:309](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L309)

___

### log

▸ **log**(`message`, `context?`): `void`

Write a 'log' level log.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `context?` | `string` |

#### Returns

`void`

#### Implementation of

[LoggerService](../interfaces/aviene_common.LoggerService.md).[log](../interfaces/aviene_common.LoggerService.md#log)

#### Defined in

[common/src/logging/logger.service.ts:256](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L256)

▸ **log**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | [...unknown[], `string`] |

#### Returns

`void`

#### Implementation of

Logger.log

#### Defined in

[common/src/logging/logger.service.ts:257](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L257)

___

### registerLocalInstanceRef

▸ **registerLocalInstanceRef**(): [`LoggerService`](../interfaces/aviene_common.LoggerService.md)

#### Returns

[`LoggerService`](../interfaces/aviene_common.LoggerService.md)

#### Defined in

[common/src/logging/logger.service.ts:318](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L318)

___

### verbose

▸ **verbose**(`message`, `context?`): `void`

Write a 'verbose' level log.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `context?` | `string` |

#### Returns

`void`

#### Implementation of

[LoggerService](../interfaces/aviene_common.LoggerService.md).[verbose](../interfaces/aviene_common.LoggerService.md#verbose)

#### Defined in

[common/src/logging/logger.service.ts:295](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L295)

▸ **verbose**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | [...unknown[], `string`] |

#### Returns

`void`

#### Implementation of

Logger.verbose

#### Defined in

[common/src/logging/logger.service.ts:296](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L296)

___

### warn

▸ **warn**(`message`, `context?`): `void`

Write a 'warn' level log.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `context?` | `string` |

#### Returns

`void`

#### Implementation of

[LoggerService](../interfaces/aviene_common.LoggerService.md).[warn](../interfaces/aviene_common.LoggerService.md#warn)

#### Defined in

[common/src/logging/logger.service.ts:269](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L269)

▸ **warn**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | [...unknown[], `string`] |

#### Returns

`void`

#### Implementation of

Logger.warn

#### Defined in

[common/src/logging/logger.service.ts:270](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L270)

___

### attachBuffer

▸ **attachBuffer**(): `void`

Attach buffer.
Turns on initialization logs buffering.

#### Returns

`void`

#### Defined in

[common/src/logging/logger.service.ts:104](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L104)

___

### debug

▸ **debug**(`message`, `context?`): `void`

Write a 'debug' level log, if the configured level allows for it.
Prints to `stdout` with newline.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `context?` | `string` |

#### Returns

`void`

#### Defined in

[common/src/logging/logger.service.ts:212](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L212)

▸ **debug**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | [...unknown[], `string`] |

#### Returns

`void`

#### Defined in

[common/src/logging/logger.service.ts:213](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L213)

___

### detachBuffer

▸ **detachBuffer**(): `void`

#### Returns

`void`

#### Defined in

[common/src/logging/logger.service.ts:112](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L112)

___

### error

▸ **error**(`message`, `stackOrContext?`): `void`

Write an 'error' level log.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `stackOrContext?` | `string` |

#### Returns

`void`

#### Defined in

[common/src/logging/logger.service.ts:176](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L176)

▸ **error**(`message`, `context?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `context?` | `string` |

#### Returns

`void`

#### Defined in

[common/src/logging/logger.service.ts:177](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L177)

▸ **error**(`message`, `stack?`, `context?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `stack?` | `string` |
| `context?` | `string` |

#### Returns

`void`

#### Defined in

[common/src/logging/logger.service.ts:178](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L178)

▸ **error**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | [...unknown[], `string`, `string`] |

#### Returns

`void`

#### Defined in

[common/src/logging/logger.service.ts:179](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L179)

___

### fatal

▸ **fatal**(`message`, `context?`): `void`

Write a 'fatal' level log.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `context?` | `string` |

#### Returns

`void`

#### Defined in

[common/src/logging/logger.service.ts:232](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L232)

▸ **fatal**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | [...unknown[], `string`] |

#### Returns

`void`

#### Defined in

[common/src/logging/logger.service.ts:233](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L233)

___

### flush

▸ **flush**(): `void`

Print buffered logs and detach buffer.

#### Returns

`void`

#### Defined in

[common/src/logging/logger.service.ts:143](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L143)

___

### getTimestamp

▸ **getTimestamp**(): `string`

#### Returns

`string`

#### Defined in

[common/src/logging/logger.service.ts:116](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L116)

___

### isLevelEnabled

▸ **isLevelEnabled**(`level`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`LogLevel`](../modules/aviene_common.md#loglevel) |

#### Returns

`boolean`

#### Defined in

[common/src/logging/logger.service.ts:150](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L150)

___

### log

▸ **log**(`message`, `context?`): `void`

Write a 'log' level log.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `context?` | `string` |

#### Returns

`void`

#### Defined in

[common/src/logging/logger.service.ts:191](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L191)

▸ **log**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | [...unknown[], `string`] |

#### Returns

`void`

#### Defined in

[common/src/logging/logger.service.ts:192](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L192)

___

### overrideLogger

▸ **overrideLogger**(`logger`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | `boolean` \| [`LogLevel`](../modules/aviene_common.md#loglevel)[] \| [`LoggerService`](../interfaces/aviene_common.LoggerService.md) |

#### Returns

`unknown`

#### Defined in

[common/src/logging/logger.service.ts:120](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L120)

___

### verbose

▸ **verbose**(`message`, `context?`): `void`

Write a 'verbose' level log.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `context?` | `string` |

#### Returns

`void`

#### Defined in

[common/src/logging/logger.service.ts:222](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L222)

▸ **verbose**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | [...unknown[], `string`] |

#### Returns

`void`

#### Defined in

[common/src/logging/logger.service.ts:223](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L223)

___

### warn

▸ **warn**(`message`, `context?`): `void`

Write a 'warn' level log.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `context?` | `string` |

#### Returns

`void`

#### Defined in

[common/src/logging/logger.service.ts:201](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L201)

▸ **warn**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | [...unknown[], `string`] |

#### Returns

`void`

#### Defined in

[common/src/logging/logger.service.ts:202](https://github.com/stefan-karlsson/node-typescript-libs/blob/7985f957d36be75373c8c75f6a8d90a6128bee0b/packages/common/src/logging/logger.service.ts#L202)
