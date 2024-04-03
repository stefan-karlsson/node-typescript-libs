import { colorIfAllowed } from "./color.utils";

/**
 * Hexadecimal Foreground Color Codes
 */
export const color_code = {
    black: colorIfAllowed((text: string) => `\x1B[30m${text}\x1B[39m`),
    red: colorIfAllowed((text: string) => `\x1B[31m${text}\x1B[39m`),
    green: colorIfAllowed((text: string) => `\x1B[32m${text}\x1B[39m`),
    yellow: colorIfAllowed((text: string) => `\x1B[33m${text}\x1B[39m`),
    blue: colorIfAllowed((text: string) => `\x1B[34m${text}\x1B[39m`),
    magenta: colorIfAllowed((text: string) => `\x1B[35m${text}\x1B[39m`),
    cyan: colorIfAllowed((text: string) => `\x1B[36m${text}\x1B[39m`),
    white: colorIfAllowed((text: string) => `\x1B[37m${text}\x1B[39m`),
};

export const graphics_mode = {
    bold: colorIfAllowed((text: string) => `\x1B[1m${text}\x1B[0m`),
    dim_faint: colorIfAllowed((text: string) => `\x1B[2m${text}\x1B[0m`),
    italic: colorIfAllowed((text: string) => `\x1B[3m${text}\x1B[0m`),
    underline: colorIfAllowed((text: string) => `\x1B[4m${text}\x1B[0m`),
    blinking: colorIfAllowed((text: string) => `\x1B[5m${text}\x1B[0m`),
    inverse_reverse: colorIfAllowed((text: string) => `\x1B[7m${text}\x1B[0m`),
    hidden_invisible: colorIfAllowed((text: string) => `\x1B[8m${text}\x1B[0m`),
    strikethrough: colorIfAllowed((text: string) => `\x1B[9m${text}\x1B[0m`),
}