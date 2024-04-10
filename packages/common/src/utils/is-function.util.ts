import { isPresent } from './is-present.util.js'

/**
 * Checks if a value is an function.
 * @param fn The value to check.
 * @returns True if the value is an function, false otherwise.
 */
export function isFunction(fn: unknown): fn is Function {
  return isPresent(fn) && !Array.isArray(fn) && typeof fn === 'function'
}
