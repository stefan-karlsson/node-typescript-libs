import { colorTextConditionally } from "./colorize-text-conditionally.helper.js";

/** 
 * Provides an object with functions to style text using ANSI escape codes,  
 * conditionally based on the availability of color support. 
 *  
 * @property {Function} bold - Function to style text as bold. 
 * @property {Function} dim_faint - Function to style text with dim/faint effect. 
 * @property {Function} italic - Function to style text as italic. 
 * @property {Function} underline - Function to underline text. 
 * @property {Function} blinking - Function to make text blink. 
 * @property {Function} inverse_reverse - Function to reverse the foreground and background colors of text. 
 * @property {Function} hidden_invisible - Function to hide text (invisible). 
 * @property {Function} strikethrough - Function to strikethrough text. 
 */
export const styleText = {
  bold: colorTextConditionally((text: string) => `\x1B[1m${text}\x1B[0m`),
  dim_faint: colorTextConditionally((text: string) => `\x1B[2m${text}\x1B[0m`),
  italic: colorTextConditionally((text: string) => `\x1B[3m${text}\x1B[0m`),
  underline: colorTextConditionally((text: string) => `\x1B[4m${text}\x1B[0m`),
  blinking: colorTextConditionally((text: string) => `\x1B[5m${text}\x1B[0m`),
  inverse_reverse: colorTextConditionally((text: string) => `\x1B[7m${text}\x1B[0m`),
  hidden_invisible: colorTextConditionally((text: string) => `\x1B[8m${text}\x1B[0m`),
  strikethrough: colorTextConditionally((text: string) => `\x1B[9m${text}\x1B[0m`),
}