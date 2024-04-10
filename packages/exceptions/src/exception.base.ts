// import { RequestContextService } from '@libs/application/context/AppRequestContext';

export interface SerializedException {
  message: string
  code: string
  correlationId: string
  stack?: string
  cause?: string
  metadata?: unknown
}
/**
 * Base class for custom exceptions.
 *
 * @abstract
 * @class ExceptionBase
 * @extends {Error}
 */
export abstract class ExceptionBase extends Error {
  readonly correlationId!: string
  readonly metadata: unknown
  readonly cause?: Error

  abstract code: string

  /**
   * @param {string} message
   * @param {ObjectLiteral} [metadata={}]
   * **BE CAREFUL** not to include sensitive info in 'metadata'
   * to prevent leaks since all exception's data will end up
   * in application's log files. Only include non-sensitive
   * info that may help with debugging.
   */
  constructor(
    message: string,
    cause?: Error,
    metadata?: unknown,
  ) {
    super(message)
    this.cause = cause
    this.metadata = metadata

    Error.captureStackTrace(this, this.constructor)
    // const ctx = RequestContextService.getContext();
    // this.correlationId = ctx.requestId;
  }

  /**
   * By default in NodeJS Error objects are not
   * serialized properly when sending plain objects
   * to external processes. This method is a workaround.
   * Keep in mind not to return a stack trace to user when in production.
   * https://iaincollins.medium.com/error-handling-in-javascript-a6172ccdf9af
   */
  toJSON(): SerializedException {
    return {
      message: this.message,
      code: this.code,
      stack: this.stack,
      correlationId: this.correlationId,
      cause: JSON.stringify(this.cause),
      metadata: this.metadata,
    }
  }
}
