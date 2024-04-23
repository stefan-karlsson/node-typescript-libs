[@aviene/node-typescript-libs - v0.0.0](../README.md) / [Exports](../modules.md) / @aviene/common

# Module: @aviene/common

## Table of contents

### Classes

- [ConsoleLogger](../classes/aviene_common.ConsoleLogger.md)
- [Logger](../classes/aviene_common.Logger.md)

### Interfaces

- [ConsoleLoggerOptions](../interfaces/aviene_common.ConsoleLoggerOptions.md)
- [LoggerService](../interfaces/aviene_common.LoggerService.md)

### Type Aliases

- [LogLevel](aviene_common.md#loglevel)
- [ObjectLiteral](aviene_common.md#objectliteral)

### Functions

- [convertPropsToObject](aviene_common.md#convertpropstoobject)
- [isEmpty](aviene_common.md#isempty)
- [isFunction](aviene_common.md#isfunction)
- [isLogLevelEnabled](aviene_common.md#isloglevelenabled)
- [isObject](aviene_common.md#isobject)
- [isPresent](aviene_common.md#ispresent)
- [isString](aviene_common.md#isstring)
- [isUndefined](aviene_common.md#isundefined)

## Type Aliases

### LogLevel

Ƭ **LogLevel**: ``"log"`` \| ``"error"`` \| ``"warn"`` \| ``"debug"`` \| ``"verbose"`` \| ``"fatal"``

#### Defined in

[common/src/logging/logger.service.ts:5](https://github.com/stefan-karlsson/node-typescript-libs/blob/634d9750515ff0db4b5bfc0e5b0932298019d262/packages/common/src/logging/logger.service.ts#L5)

___

### ObjectLiteral

Ƭ **ObjectLiteral**: `Record`\<`string`, `unknown`\>

Data type that is used to define objects in JavaScript

#### Defined in

[common/src/types/object-literal.type.ts:4](https://github.com/stefan-karlsson/node-typescript-libs/blob/634d9750515ff0db4b5bfc0e5b0932298019d262/packages/common/src/types/object-literal.type.ts#L4)

## Functions

### convertPropsToObject

▸ **convertPropsToObject**(`props`): [`ObjectLiteral`](aviene_common.md#objectliteral)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `unknown` |

#### Returns

[`ObjectLiteral`](aviene_common.md#objectliteral)

#### Defined in

[common/src/utils/convert-props-to-object.util.ts:11](https://github.com/stefan-karlsson/node-typescript-libs/blob/634d9750515ff0db4b5bfc0e5b0932298019d262/packages/common/src/utils/convert-props-to-object.util.ts#L11)

___

### isEmpty

▸ **isEmpty**(`value`): `boolean`

Checks if a value is empty.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check. |

#### Returns

`boolean`

True if the value is empty, false otherwise.

#### Defined in

[common/src/utils/is-empty.util.ts:6](https://github.com/stefan-karlsson/node-typescript-libs/blob/634d9750515ff0db4b5bfc0e5b0932298019d262/packages/common/src/utils/is-empty.util.ts#L6)

___

### isFunction

▸ **isFunction**(`fn`): fn is Function

Checks if a value is an function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `unknown` | The value to check. |

#### Returns

fn is Function

True if the value is an function, false otherwise.

#### Defined in

[common/src/utils/is-function.util.ts:8](https://github.com/stefan-karlsson/node-typescript-libs/blob/634d9750515ff0db4b5bfc0e5b0932298019d262/packages/common/src/utils/is-function.util.ts#L8)

___

### isLogLevelEnabled

▸ **isLogLevelEnabled**(`targetLevel`, `logLevels`): `boolean`

Checks if target level is enabled.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetLevel` | [`LogLevel`](aviene_common.md#loglevel) | target level |
| `logLevels` | `undefined` \| [`LogLevel`](aviene_common.md#loglevel)[] | array of enabled log levels |

#### Returns

`boolean`

#### Defined in

[common/src/logging/is-log-level-enabled.util.ts:17](https://github.com/stefan-karlsson/node-typescript-libs/blob/634d9750515ff0db4b5bfc0e5b0932298019d262/packages/common/src/logging/is-log-level-enabled.util.ts#L17)

___

### isObject

▸ **isObject**(`obj`): obj is ObjectLiteral

Checks if a value is an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `unknown` | The value to check. |

#### Returns

obj is ObjectLiteral

True if the value is an object, false otherwise.

#### Defined in

[common/src/utils/is-object.util.ts:9](https://github.com/stefan-karlsson/node-typescript-libs/blob/634d9750515ff0db4b5bfc0e5b0932298019d262/packages/common/src/utils/is-object.util.ts#L9)

___

### isPresent

▸ **isPresent**\<`T`\>(`value`): value is NonNullable\<T\>

Checks if a value is present (not null or undefined).

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to check. |

#### Returns

value is NonNullable\<T\>

True if the value is not null or undefined, false otherwise.

#### Defined in

[common/src/utils/is-present.util.ts:8](https://github.com/stefan-karlsson/node-typescript-libs/blob/634d9750515ff0db4b5bfc0e5b0932298019d262/packages/common/src/utils/is-present.util.ts#L8)

___

### isString

▸ **isString**(`value`): value is string

Checks if a value is a string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check. |

#### Returns

value is string

True if the value is an string, false otherwise.

#### Defined in

[common/src/utils/is-string.util.ts:6](https://github.com/stefan-karlsson/node-typescript-libs/blob/634d9750515ff0db4b5bfc0e5b0932298019d262/packages/common/src/utils/is-string.util.ts#L6)

___

### isUndefined

▸ **isUndefined**(`value`): value is undefined

Checks if a value is undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | The value to check. |

#### Returns

value is undefined

True if the value is undefined, false otherwise.

#### Defined in

[common/src/utils/is-undefined.util.ts:6](https://github.com/stefan-karlsson/node-typescript-libs/blob/634d9750515ff0db4b5bfc0e5b0932298019d262/packages/common/src/utils/is-undefined.util.ts#L6)
