import { isColorAllowed } from "./is-color-allowed.helper.js";

type ColorTextFn = (text: string) => string;

/** 
 * Conditionally applies color to text based on the availability of color support. 
 *  
 * @param colorFn A function that applies color to text. 
 * @returns A function that either applies the specified color to the text if color support is available,  
 * or returns the text as is if color support is not available. 
 */ 
export const colorTextConditionally =
  (colorFn: ColorTextFn) => (text: string) =>
    isColorAllowed() ? colorFn(text) : text;
