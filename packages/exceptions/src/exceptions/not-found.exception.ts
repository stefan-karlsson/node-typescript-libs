import { NOT_FOUND } from '../exception.codes.js'
import { ExceptionBase } from '../exception.base.js'

/**
 * Used to indicate that entity is not found
 *
 * @class NotFoundException
 * @extends {ExceptionBase}
 */

export class NotFoundException extends ExceptionBase {
  static readonly message = 'Not found'
  readonly code = NOT_FOUND
  constructor(message = NotFoundException.message) {
    super(message)
  }
}
