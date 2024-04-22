[@aviene/node-typescript-libs - v0.0.0](../README.md) / [Exports](../modules.md) / [@aviene/common](../modules/aviene_common.md) / ConsoleLoggerOptions

# Interface: ConsoleLoggerOptions

[@aviene/common](../modules/aviene_common.md).ConsoleLoggerOptions

## Table of contents

### Properties

- [dateTimeFormat](aviene_common.ConsoleLoggerOptions.md#datetimeformat)
- [logLevels](aviene_common.ConsoleLoggerOptions.md#loglevels)
- [timestamp](aviene_common.ConsoleLoggerOptions.md#timestamp)

## Properties

### dateTimeFormat

• `Optional` **dateTimeFormat**: `DateTimeFormat`

The locale or locales to use

See [MDN - Intl - locales argument](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

#### Defined in

[common/src/logging/console-logger.service.ts:21](https://github.com/stefan-karlsson/node-typescript-libs/blob/80b25832d6231ef44d8655cde130b2ce90791137/packages/common/src/logging/console-logger.service.ts#L21)

___

### logLevels

• `Optional` **logLevels**: [`LogLevel`](../modules/aviene_common.md#loglevel)[]

Enabled log levels.

#### Defined in

[common/src/logging/console-logger.service.ts:10](https://github.com/stefan-karlsson/node-typescript-libs/blob/80b25832d6231ef44d8655cde130b2ce90791137/packages/common/src/logging/console-logger.service.ts#L10)

___

### timestamp

• `Optional` **timestamp**: `boolean`

If enabled, will print timestamp (time difference) between current and previous log message.

#### Defined in

[common/src/logging/console-logger.service.ts:14](https://github.com/stefan-karlsson/node-typescript-libs/blob/80b25832d6231ef44d8655cde130b2ce90791137/packages/common/src/logging/console-logger.service.ts#L14)
