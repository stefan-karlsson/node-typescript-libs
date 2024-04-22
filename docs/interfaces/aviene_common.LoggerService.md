[@aviene/node-typescript-libs - v0.0.0](../README.md) / [Exports](../modules.md) / [@aviene/common](../modules/aviene_common.md) / LoggerService

# Interface: LoggerService

[@aviene/common](../modules/aviene_common.md).LoggerService

## Implemented by

- [`ConsoleLogger`](../classes/aviene_common.ConsoleLogger.md)
- [`Logger`](../classes/aviene_common.Logger.md)

## Table of contents

### Methods

- [debug](aviene_common.LoggerService.md#debug)
- [error](aviene_common.LoggerService.md#error)
- [fatal](aviene_common.LoggerService.md#fatal)
- [log](aviene_common.LoggerService.md#log)
- [setLogLevels](aviene_common.LoggerService.md#setloglevels)
- [verbose](aviene_common.LoggerService.md#verbose)
- [warn](aviene_common.LoggerService.md#warn)

## Methods

### debug

▸ **debug**(`message`, `...optionalParams`): `unknown`

Write a 'debug' level log.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | `unknown`[] |

#### Returns

`unknown`

#### Defined in

[common/src/logging/logger.service.ts:26](https://github.com/stefan-karlsson/node-typescript-libs/blob/ccf7b47c323bc347f062ecaaef00408c7df7e778/packages/common/src/logging/logger.service.ts#L26)

___

### error

▸ **error**(`message`, `...optionalParams`): `unknown`

Write an 'error' level log.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | `unknown`[] |

#### Returns

`unknown`

#### Defined in

[common/src/logging/logger.service.ts:16](https://github.com/stefan-karlsson/node-typescript-libs/blob/ccf7b47c323bc347f062ecaaef00408c7df7e778/packages/common/src/logging/logger.service.ts#L16)

___

### fatal

▸ **fatal**(`message`, `...optionalParams`): `unknown`

Write a 'fatal' level log.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | `unknown`[] |

#### Returns

`unknown`

#### Defined in

[common/src/logging/logger.service.ts:36](https://github.com/stefan-karlsson/node-typescript-libs/blob/ccf7b47c323bc347f062ecaaef00408c7df7e778/packages/common/src/logging/logger.service.ts#L36)

___

### log

▸ **log**(`message`, `...optionalParams`): `unknown`

Write a 'log' level log.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | `unknown`[] |

#### Returns

`unknown`

#### Defined in

[common/src/logging/logger.service.ts:11](https://github.com/stefan-karlsson/node-typescript-libs/blob/ccf7b47c323bc347f062ecaaef00408c7df7e778/packages/common/src/logging/logger.service.ts#L11)

___

### setLogLevels

▸ **setLogLevels**(`levels`): `unknown`

Set log levels.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `levels` | [`LogLevel`](../modules/aviene_common.md#loglevel)[] | log levels |

#### Returns

`unknown`

#### Defined in

[common/src/logging/logger.service.ts:42](https://github.com/stefan-karlsson/node-typescript-libs/blob/ccf7b47c323bc347f062ecaaef00408c7df7e778/packages/common/src/logging/logger.service.ts#L42)

___

### verbose

▸ **verbose**(`message`, `...optionalParams`): `unknown`

Write a 'verbose' level log.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | `unknown`[] |

#### Returns

`unknown`

#### Defined in

[common/src/logging/logger.service.ts:31](https://github.com/stefan-karlsson/node-typescript-libs/blob/ccf7b47c323bc347f062ecaaef00408c7df7e778/packages/common/src/logging/logger.service.ts#L31)

___

### warn

▸ **warn**(`message`, `...optionalParams`): `unknown`

Write a 'warn' level log.

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `...optionalParams` | `unknown`[] |

#### Returns

`unknown`

#### Defined in

[common/src/logging/logger.service.ts:21](https://github.com/stefan-karlsson/node-typescript-libs/blob/ccf7b47c323bc347f062ecaaef00408c7df7e778/packages/common/src/logging/logger.service.ts#L21)
