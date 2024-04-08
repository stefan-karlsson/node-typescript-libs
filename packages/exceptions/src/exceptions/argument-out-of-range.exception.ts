import { ARGUMENT_OUT_OF_RANGE } from '../exception.codes.js'
import { ExceptionBase } from '../exception.base.js'

/**
 * Used to indicate that an argument is out of allowed range
 * (for example: incorrect string/array length, number not in allowed min/max range etc)
 *
 * @class ArgumentOutOfRangeException
 * @extends {ExceptionBase}
 */

export class ArgumentOutOfRangeException extends ExceptionBase {
  readonly code = ARGUMENT_OUT_OF_RANGE
}
