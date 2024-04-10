import { isUndefined } from './is-undefined.util.js'

/**
 * Checks if a value is present (not null or undefined).
 * @param value The value to check.
 * @returns True if the value is not null or undefined, false otherwise.
 */
export function isPresent<T>(value: T): value is NonNullable<T> {
  return value !== null && !isUndefined(value)
}
