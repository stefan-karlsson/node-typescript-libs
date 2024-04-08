import { INTERNAL_SERVER_ERROR } from '../exception.codes.js'
import { ExceptionBase } from '../exception.base.js'

/**
 * Used to indicate an internal server error that does not fall under all other errors
 *
 * @class InternalServerErrorException
 * @extends {ExceptionBase}
 */

export class InternalServerErrorException extends ExceptionBase {
  static readonly message = 'Internal server error'
  readonly code = INTERNAL_SERVER_ERROR

  constructor(message = InternalServerErrorException.message) {
    super(message)
  }
}
