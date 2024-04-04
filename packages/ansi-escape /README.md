# ANSI Escape Sequences

A small utility library that utilizes ANSI escape codes to achieve text styling effects.

## Note

Ensure that the terminal supports ANSI escape codes for the styling effects to be displayed correctly.

## Example

```typescript
import { colorizeText, styleText } from "@aviene/ansi-escape";

// Apply red color to text
const redText = colorizeText.red("Hello, World!");

// Apply bold mode to text
const boldText = styleText.bold("Bold Text");
```

