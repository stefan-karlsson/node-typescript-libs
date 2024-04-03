# ANSI Escape Sequences

A small utility library that utilizes ANSI escape codes to achieve text styling effects.

## Note

Ensure that the terminal supports ANSI escape codes for the styling effects to be displayed correctly.

## Example

import { color_code, graphics_mode } from "@aviene/ansi-escape";

// Apply red color to text
const redText = color_code.red("Hello, World!");

// Apply bold mode to text
const boldText = graphics_mode.bold("Bold Text");