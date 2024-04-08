import { CONFLICT } from '../exception.codes.js'
import { ExceptionBase } from '../exception.base.js'

/**
 * Used to indicate conflicting entities (usually in the database)
 *
 * @class ConflictException
 * @extends {ExceptionBase}
 */

export class ConflictException extends ExceptionBase {
  readonly code = CONFLICT
}
