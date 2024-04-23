[@aviene/node-typescript-libs - v0.0.0](../README.md) / [Exports](../modules.md) / @aviene/ansi-escape

# Module: @aviene/ansi-escape

## Table of contents

### Variables

- [colorizeText](aviene_ansi_escape.md#colorizetext)
- [styleText](aviene_ansi_escape.md#styletext)

### Functions

- [colorTextConditionally](aviene_ansi_escape.md#colortextconditionally)
- [isColorAllowed](aviene_ansi_escape.md#iscolorallowed)

## Variables

### colorizeText

• `Const` **colorizeText**: `Object`

Provides an object with functions to colorize text using hexadecimal foreground color codes,
conditionally based on the availability of color support.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `black` | (`text`: `string`) => `string` |
| `blue` | (`text`: `string`) => `string` |
| `cyan` | (`text`: `string`) => `string` |
| `green` | (`text`: `string`) => `string` |
| `magenta` | (`text`: `string`) => `string` |
| `red` | (`text`: `string`) => `string` |
| `white` | (`text`: `string`) => `string` |
| `yellow` | (`text`: `string`) => `string` |

#### Defined in

[graphics/colorize-text.util.ts:16](https://github.com/stefan-karlsson/node-typescript-libs/blob/e994b3e72bcc079170a8a238da5ea9f797e1a16d/packages/ansi-escape/src/graphics/colorize-text.util.ts#L16)

___

### styleText

• `Const` **styleText**: `Object`

Provides an object with functions to style text using ANSI escape codes,
conditionally based on the availability of color support.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blinking` | (`text`: `string`) => `string` |
| `bold` | (`text`: `string`) => `string` |
| `dim_faint` | (`text`: `string`) => `string` |
| `hidden_invisible` | (`text`: `string`) => `string` |
| `inverse_reverse` | (`text`: `string`) => `string` |
| `italic` | (`text`: `string`) => `string` |
| `strikethrough` | (`text`: `string`) => `string` |
| `underline` | (`text`: `string`) => `string` |

#### Defined in

[graphics/style-text.util.ts:16](https://github.com/stefan-karlsson/node-typescript-libs/blob/e994b3e72bcc079170a8a238da5ea9f797e1a16d/packages/ansi-escape/src/graphics/style-text.util.ts#L16)

## Functions

### colorTextConditionally

▸ **colorTextConditionally**(`colorFn`): (`text`: `string`) => `string`

Conditionally applies color to text based on the availability of color support.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `colorFn` | `ColorTextFn` | A function that applies color to text. |

#### Returns

`fn`

A function that either applies the specified color to the text if color support is available,
or returns the text as is if color support is not available.

▸ (`text`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

##### Returns

`string`

#### Defined in

[graphics/colorize-text-conditionally.helper.ts:13](https://github.com/stefan-karlsson/node-typescript-libs/blob/e994b3e72bcc079170a8a238da5ea9f797e1a16d/packages/ansi-escape/src/graphics/colorize-text-conditionally.helper.ts#L13)

___

### isColorAllowed

▸ **isColorAllowed**(): `boolean`

Checks whether color output is allowed based on the presence of the NO_COLOR environment variable.

#### Returns

`boolean`

A boolean value indicating whether color output is allowed. Returns true if color is allowed,
or false if the NO_COLOR environment variable is set.

#### Defined in

[graphics/is-color-allowed.helper.ts:9](https://github.com/stefan-karlsson/node-typescript-libs/blob/e994b3e72bcc079170a8a238da5ea9f797e1a16d/packages/ansi-escape/src/graphics/is-color-allowed.helper.ts#L9)
