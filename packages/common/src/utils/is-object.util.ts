import { type ObjectLiteral } from '../types/index.js'
import { isPresent } from './is-present.util.js'

/**
 * Checks if a value is an object.
 * @param obj The value to check.
 * @returns True if the value is an object, false otherwise.
 */
export function isObject(obj: unknown): obj is ObjectLiteral {
  return isPresent(obj) && !Array.isArray(obj) && typeof obj === 'object'
}
