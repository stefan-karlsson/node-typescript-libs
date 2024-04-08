import { config } from '../config.js'

/**
 * Checks whether color output is allowed based on the presence of the NO_COLOR environment variable.
 *
 * @returns A boolean value indicating whether color output is allowed. Returns true if color is allowed,
 * or false if the NO_COLOR environment variable is set.
 */
export const isColorAllowed = () => !config.no_color
