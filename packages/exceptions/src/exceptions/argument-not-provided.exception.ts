import { ARGUMENT_NOT_PROVIDED } from '../exception.codes.js'
import { ExceptionBase } from '../exception.base.js'

/**
 * Used to indicate that an argument was not provided (is empty object/array, null of undefined).
 *
 * @class ArgumentNotProvidedException
 * @extends {ExceptionBase}
 */

export class ArgumentNotProvidedException extends ExceptionBase {
  readonly code = ARGUMENT_NOT_PROVIDED
}
