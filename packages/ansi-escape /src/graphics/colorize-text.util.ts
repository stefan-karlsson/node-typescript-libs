import { colorTextConditionally } from "./colorize-text-conditionally.helper.js";

/**
 * Provides an object with functions to colorize text using hexadecimal foreground color codes, 
 * conditionally based on the availability of color support. 
 *  
 * @property {Function} black - Function to colorize text in black. 
 * @property {Function} red - Function to colorize text in red. 
 * @property {Function} green - Function to colorize text in green. 
 * @property {Function} yellow - Function to colorize text in yellow. 
 * @property {Function} blue - Function to colorize text in blue. 
 * @property {Function} magenta - Function to colorize text in magenta. 
 * @property {Function} cyan - Function to colorize text in cyan. 
 * @property {Function} white - Function to colorize text in white. 
 */
export const colorizeText  = {
    black: colorTextConditionally((text: string) => `\x1B[30m${text}\x1B[39m`),
    red: colorTextConditionally((text: string) => `\x1B[31m${text}\x1B[39m`),
    green: colorTextConditionally((text: string) => `\x1B[32m${text}\x1B[39m`),
    yellow: colorTextConditionally((text: string) => `\x1B[33m${text}\x1B[39m`),
    blue: colorTextConditionally((text: string) => `\x1B[34m${text}\x1B[39m`),
    magenta: colorTextConditionally((text: string) => `\x1B[35m${text}\x1B[39m`),
    cyan: colorTextConditionally((text: string) => `\x1B[36m${text}\x1B[39m`),
    white: colorTextConditionally((text: string) => `\x1B[37m${text}\x1B[39m`),
};