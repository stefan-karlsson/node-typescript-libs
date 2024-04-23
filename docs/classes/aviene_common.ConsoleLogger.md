[@aviene/node-typescript-libs - v0.0.0](../README.md) / [Exports](../modules.md) / [@aviene/common](../modules/aviene_common.md) / ConsoleLogger

# Class: ConsoleLogger

[@aviene/common](../modules/aviene_common.md).ConsoleLogger

## Implements

- [`LoggerService`](../interfaces/aviene_common.LoggerService.md)

## Table of contents

### Constructors

- [constructor](aviene_common.ConsoleLogger.md#constructor)

### Properties

- [context](aviene_common.ConsoleLogger.md#context)
- [dateTimeFormat](aviene_common.ConsoleLogger.md#datetimeformat)
- [options](aviene_common.ConsoleLogger.md#options)
- [originalContext](aviene_common.ConsoleLogger.md#originalcontext)
- [lastTimestampAt](aviene_common.ConsoleLogger.md#lasttimestampat)

### Methods

- [colorize](aviene_common.ConsoleLogger.md#colorize)
- [debug](aviene_common.ConsoleLogger.md#debug)
- [error](aviene_common.ConsoleLogger.md#error)
- [fatal](aviene_common.ConsoleLogger.md#fatal)
- [formatContext](aviene_common.ConsoleLogger.md#formatcontext)
- [formatMessage](aviene_common.ConsoleLogger.md#formatmessage)
- [formatPid](aviene_common.ConsoleLogger.md#formatpid)
- [formatTimestampDiff](aviene_common.ConsoleLogger.md#formattimestampdiff)
- [getColorByLogLevel](aviene_common.ConsoleLogger.md#getcolorbyloglevel)
- [getContextAndMessagesToPrint](aviene_common.ConsoleLogger.md#getcontextandmessagestoprint)
- [getContextAndStackAndMessagesToPrint](aviene_common.ConsoleLogger.md#getcontextandstackandmessagestoprint)
- [getTimestamp](aviene_common.ConsoleLogger.md#gettimestamp)
- [isLevelEnabled](aviene_common.ConsoleLogger.md#islevelenabled)
- [isStackFormat](aviene_common.ConsoleLogger.md#isstackformat)
- [log](aviene_common.ConsoleLogger.md#log)
- [printMessages](aviene_common.ConsoleLogger.md#printmessages)
- [printStackTrace](aviene_common.ConsoleLogger.md#printstacktrace)
- [resetContext](aviene_common.ConsoleLogger.md#resetcontext)
- [setContext](aviene_common.ConsoleLogger.md#setcontext)
- [setLogLevels](aviene_common.ConsoleLogger.md#setloglevels)
- [stringifyMessage](aviene_common.ConsoleLogger.md#stringifymessage)
- [updateAndGetTimestampDiff](aviene_common.ConsoleLogger.md#updateandgettimestampdiff)
- [verbose](aviene_common.ConsoleLogger.md#verbose)
- [warn](aviene_common.ConsoleLogger.md#warn)

## Constructors

### constructor

• **new ConsoleLogger**(`context?`, `options?`): [`ConsoleLogger`](aviene_common.ConsoleLogger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | `string` |
| `options?` | [`ConsoleLoggerOptions`](../interfaces/aviene_common.ConsoleLoggerOptions.md) |

#### Returns

[`ConsoleLogger`](aviene_common.ConsoleLogger.md)

#### Defined in

[common/src/logging/console-logger.service.ts:41](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L41)

## Properties

### context

• `Protected` `Optional` **context**: `string`

#### Defined in

[common/src/logging/console-logger.service.ts:35](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L35)

___

### dateTimeFormat

• `Private` **dateTimeFormat**: `DateTimeFormat`

#### Defined in

[common/src/logging/console-logger.service.ts:39](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L39)

___

### options

• `Protected` `Optional` **options**: [`ConsoleLoggerOptions`](../interfaces/aviene_common.ConsoleLoggerOptions.md) = `{}`

#### Defined in

[common/src/logging/console-logger.service.ts:36](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L36)

___

### originalContext

• `Private` `Optional` **originalContext**: `string`

#### Defined in

[common/src/logging/console-logger.service.ts:38](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L38)

___

### lastTimestampAt

▪ `Private` `Static` `Optional` **lastTimestampAt**: `number`

#### Defined in

[common/src/logging/console-logger.service.ts:34](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L34)

## Methods

### colorize

▸ **colorize**(`message`, `logLevel`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `logLevel` | [`LogLevel`](../modules/aviene_common.md#loglevel) |

#### Returns

`string`

#### Defined in

[common/src/logging/console-logger.service.ts:275](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L275)

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

#### Implementation of

[LoggerService](../interfaces/aviene_common.LoggerService.md).[debug](../interfaces/aviene_common.LoggerService.md#debug)

#### Defined in

[common/src/logging/console-logger.service.ts:123](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L123)

▸ **debug**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | [...unknown[], `string`] |

#### Returns

`void`

#### Implementation of

LoggerService.debug

#### Defined in

[common/src/logging/console-logger.service.ts:124](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L124)

___

### error

▸ **error**(`message`, `stack?`, `context?`): `void`

Write an 'error' level log, if the configured level allows for it.
Prints to `stderr` with newline.

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

[common/src/logging/console-logger.service.ts:89](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L89)

▸ **error**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | [...unknown[], `string`, `string`] |

#### Returns

`void`

#### Implementation of

LoggerService.error

#### Defined in

[common/src/logging/console-logger.service.ts:90](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L90)

___

### fatal

▸ **fatal**(`message`, `context?`): `void`

Write a 'fatal' level log, if the configured level allows for it.
Prints to `stdout` with newline.

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

[common/src/logging/console-logger.service.ts:157](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L157)

▸ **fatal**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | [...unknown[], `string`] |

#### Returns

`void`

#### Implementation of

LoggerService.fatal

#### Defined in

[common/src/logging/console-logger.service.ts:158](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L158)

___

### formatContext

▸ **formatContext**(`context`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `string` |

#### Returns

`string`

#### Defined in

[common/src/logging/console-logger.service.ts:233](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L233)

___

### formatMessage

▸ **formatMessage**(`logLevel`, `message`, `pidMessage`, `formattedLogLevel`, `contextMessage`, `timestampDiff`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `logLevel` | [`LogLevel`](../modules/aviene_common.md#loglevel) |
| `message` | `unknown` |
| `pidMessage` | `string` |
| `formattedLogLevel` | `string` |
| `contextMessage` | `string` |
| `timestampDiff` | `string` |

#### Returns

`string`

#### Defined in

[common/src/logging/console-logger.service.ts:238](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L238)

___

### formatPid

▸ **formatPid**(`pid`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pid` | `number` |

#### Returns

`string`

#### Defined in

[common/src/logging/console-logger.service.ts:229](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L229)

___

### formatTimestampDiff

▸ **formatTimestampDiff**(`timestampDiff`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestampDiff` | `number` |

#### Returns

`string`

#### Defined in

[common/src/logging/console-logger.service.ts:297](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L297)

___

### getColorByLogLevel

▸ **getColorByLogLevel**(`level`): (`text`: `string`) => `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`LogLevel`](../modules/aviene_common.md#loglevel) |

#### Returns

`fn`

▸ (`text`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

##### Returns

`string`

#### Defined in

[common/src/logging/console-logger.service.ts:359](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L359)

___

### getContextAndMessagesToPrint

▸ **getContextAndMessagesToPrint**(`args`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `unknown`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `context` | `undefined` \| `string` |
| `messages` | `unknown`[] |

#### Defined in

[common/src/logging/console-logger.service.ts:301](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L301)

___

### getContextAndStackAndMessagesToPrint

▸ **getContextAndStackAndMessagesToPrint**(`args`): \{ `context`: `undefined` \| `string` ; `messages`: `unknown`[] ; `stack?`: `undefined` = lastElement } \| \{ `context`: `undefined` \| `string` ; `messages`: `unknown`[] ; `stack`: `undefined` \| `string` = lastElement }

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `unknown`[] |

#### Returns

\{ `context`: `undefined` \| `string` ; `messages`: `unknown`[] ; `stack?`: `undefined` = lastElement } \| \{ `context`: `undefined` \| `string` ; `messages`: `unknown`[] ; `stack`: `undefined` \| `string` = lastElement }

#### Defined in

[common/src/logging/console-logger.service.ts:317](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L317)

___

### getTimestamp

▸ **getTimestamp**(): `string`

#### Returns

`string`

#### Defined in

[common/src/logging/console-logger.service.ts:201](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L201)

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

[common/src/logging/console-logger.service.ts:196](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L196)

___

### isStackFormat

▸ **isStackFormat**(`stack`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stack` | `unknown` |

#### Returns

`boolean`

#### Defined in

[common/src/logging/console-logger.service.ts:351](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L351)

___

### log

▸ **log**(`message`, `context?`): `void`

Write a 'log' level log, if the configured level allows for it.
Prints to `stdout` with newline.

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

[common/src/logging/console-logger.service.ts:72](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L72)

▸ **log**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | [...unknown[], `string`] |

#### Returns

`void`

#### Implementation of

LoggerService.log

#### Defined in

[common/src/logging/console-logger.service.ts:73](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L73)

___

### printMessages

▸ **printMessages**(`messages`, `context?`, `logLevel?`, `writeStreamType?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `messages` | `unknown`[] | `undefined` |
| `context` | `string` | `''` |
| `logLevel` | [`LogLevel`](../modules/aviene_common.md#loglevel) | `'log'` |
| `writeStreamType?` | ``"stdout"`` \| ``"stderr"`` | `undefined` |

#### Returns

`void`

#### Defined in

[common/src/logging/console-logger.service.ts:205](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L205)

___

### printStackTrace

▸ **printStackTrace**(`stack`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stack` | `string` |

#### Returns

`void`

#### Defined in

[common/src/logging/console-logger.service.ts:280](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L280)

___

### resetContext

▸ **resetContext**(): `void`

Resets the logger context to the value that was passed in the constructor.

#### Returns

`void`

#### Defined in

[common/src/logging/console-logger.service.ts:192](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L192)

___

### setContext

▸ **setContext**(`context`): `void`

Set logger context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `string` | context |

#### Returns

`void`

#### Defined in

[common/src/logging/console-logger.service.ts:185](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L185)

___

### setLogLevels

▸ **setLogLevels**(`levels`): `void`

Set log levels

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `levels` | [`LogLevel`](../modules/aviene_common.md#loglevel)[] | log levels |

#### Returns

`void`

#### Implementation of

[LoggerService](../interfaces/aviene_common.LoggerService.md).[setLogLevels](../interfaces/aviene_common.LoggerService.md#setloglevels)

#### Defined in

[common/src/logging/console-logger.service.ts:174](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L174)

___

### stringifyMessage

▸ **stringifyMessage**(`message`, `logLevel`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `logLevel` | [`LogLevel`](../modules/aviene_common.md#loglevel) |

#### Returns

`string`

#### Defined in

[common/src/logging/console-logger.service.ts:252](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L252)

___

### updateAndGetTimestampDiff

▸ **updateAndGetTimestampDiff**(): `string`

#### Returns

`string`

#### Defined in

[common/src/logging/console-logger.service.ts:287](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L287)

___

### verbose

▸ **verbose**(`message`, `context?`): `void`

Write a 'verbose' level log, if the configured level allows for it.
Prints to `stdout` with newline.

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

[common/src/logging/console-logger.service.ts:140](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L140)

▸ **verbose**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | [...unknown[], `string`] |

#### Returns

`void`

#### Implementation of

LoggerService.verbose

#### Defined in

[common/src/logging/console-logger.service.ts:141](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L141)

___

### warn

▸ **warn**(`message`, `context?`): `void`

Write a 'warn' level log, if the configured level allows for it.
Prints to `stdout` with newline.

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

[common/src/logging/console-logger.service.ts:106](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L106)

▸ **warn**(`message`, `...optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | [...unknown[], `string`] |

#### Returns

`void`

#### Implementation of

LoggerService.warn

#### Defined in

[common/src/logging/console-logger.service.ts:107](https://github.com/stefan-karlsson/node-typescript-libs/blob/9a6c5fe2e02c308fdf6ba639aa54e5e8fdb32e3e/packages/common/src/logging/console-logger.service.ts#L107)
