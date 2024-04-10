import { isObject } from '../utils/index.js'
import { ConsoleLogger } from './console-logger.service.js'
import { isLogLevelEnabled } from './is-log-level-enabled.util.js'

type LogLevel = 'log' | 'error' | 'warn' | 'debug' | 'verbose' | 'fatal'

interface Logger {
  /**
   * Write a 'log' level log.
   */
  log(message: unknown, ...optionalParams: unknown[]): unknown

  /**
   * Write an 'error' level log.
   */
  error(message: unknown, ...optionalParams: unknown[]): unknown

  /**
   * Write a 'warn' level log.
   */
  warn(message: unknown, ...optionalParams: unknown[]): unknown

  /**
   * Write a 'debug' level log.
   */
  debug?(message: unknown, ...optionalParams: unknown[]): unknown

  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: unknown, ...optionalParams: unknown[]): unknown

  /**
   * Write a 'fatal' level log.
   */
  fatal?(message: unknown, ...optionalParams: unknown[]): unknown

  /**
   * Set log levels.
   * @param levels log levels
   */
  setLogLevels?(levels: LogLevel[]): unknown
}

interface LogBufferRecord {
  /**
   * Method to execute.
   */
  methodRef: Function

  /**
   * Arguments to pass to the method.
   */
  arguments: unknown[]
}

const DEFAULT_LOGGER = new ConsoleLogger()

const dateTimeFormatter = new Intl.DateTimeFormat(undefined, {
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  day: '2-digit',
  month: '2-digit',
})

class LoggerService implements Logger {
  protected static logBuffer = new Array<LogBufferRecord>()
  protected static staticInstanceRef?: Logger = DEFAULT_LOGGER
  protected static logLevels?: LogLevel[]
  private static isBufferAttached: boolean

  protected localInstanceRef?: Logger
  protected context?: string
  protected options: { timestamp?: boolean }
  constructor(context?: string, options?: { timestamp?: boolean })
  constructor(
    context?: string,
    options: { timestamp?: boolean } = {},
  ) {
    this.context = context
    this.options = options
  }

  get localInstance(): Logger {
    if (LoggerService.staticInstanceRef === DEFAULT_LOGGER) {
      return this.registerLocalInstanceRef()
    } else if (LoggerService.staticInstanceRef instanceof LoggerService) {
      const prototype = Object.getPrototypeOf(LoggerService.staticInstanceRef)

      if (prototype.constructor === LoggerService) {
        return this.registerLocalInstanceRef()
      }
    }

    return LoggerService.staticInstanceRef!
  }

  /**
 * Attach buffer.
 * Turns on initialization logs buffering.
 */
  static attachBuffer() {
    this.isBufferAttached = true
  }

  //
  // Detach buffer.
  // Turns off initialization logs buffering.
  //
  static detachBuffer() {
    this.isBufferAttached = false
  }

  static getTimestamp() {
    return dateTimeFormatter.format(Date.now())
  }

  static overrideLogger(logger: Logger | LogLevel[] | boolean): unknown {
    if (Array.isArray(logger)) {
      LoggerService.logLevels = logger
      // @ts-expect-error
      return this.staticInstanceRef?.setLogLevels(logger)
    }

    if (isObject(logger)) {
      if (logger instanceof LoggerService && logger.constructor !== LoggerService) {
        const errorMessage = 'Extending "LoggerService" is disallowed. Please extend "ConsoleLogger" instead.'
        // @ts-expect-error
        this.staticInstanceRef.error(errorMessage)
        throw new Error(errorMessage)
      }
      this.staticInstanceRef = logger as Logger
    } else {
      this.staticInstanceRef = undefined
    }
  }

  /**
 * Print buffered logs and detach buffer.
 */
  static flush() {
    this.isBufferAttached = false
    this.logBuffer.forEach(item =>
      item.methodRef(...(item.arguments as [string])))
    this.logBuffer = []
  }

  static isLevelEnabled(level: LogLevel): boolean {
    const logLevels = LoggerService.logLevels
    return isLogLevelEnabled(level, logLevels)
  }

  private static wrapBuffer: MethodDecorator = (
    _target: object,
    _propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<any>,
  ) => {
    const originalFn = descriptor.value
    descriptor.value = (...args: unknown[]) => {
      if (LoggerService.isBufferAttached) {
        LoggerService.logBuffer.push({
          methodRef: originalFn.bind(this),
          arguments: args,
        })
        return
      }
      return originalFn.call(this, ...args)
    }
  }

  /**
 * Write an 'error' level log.
 */
  static error(message: unknown, stackOrContext?: string): void
  static error(message: unknown, context?: string): void
  static error(message: unknown, stack?: string, context?: string): void
  static error(
    message: unknown,
    ...optionalParams: [...unknown[], string, string]
  ): void
  @LoggerService.wrapBuffer
  static error(message: unknown, ...optionalParams: unknown[]) {
    this.staticInstanceRef?.error(message, ...optionalParams)
  }

  /**
 * Write a 'log' level log.
 */
  static log(message: unknown, context?: string): void
  static log(message: unknown, ...optionalParams: [...unknown[], string]): void
  @LoggerService.wrapBuffer
  static log(message: unknown, ...optionalParams: unknown[]) {
    this.staticInstanceRef?.log(message, ...optionalParams)
  }

  /**
 * Write a 'warn' level log.
 */
  static warn(message: unknown, context?: string): void
  static warn(message: unknown, ...optionalParams: [...unknown[], string]): void
  @LoggerService.wrapBuffer
  static warn(message: unknown, ...optionalParams: unknown[]) {
    this.staticInstanceRef?.warn(message, ...optionalParams)
  }

  /**
 * Write a 'debug' level log, if the configured level allows for it.
 * Prints to `stdout` with newline.
 */
  static debug(message: unknown, context?: string): void
  static debug(message: unknown, ...optionalParams: [...unknown[], string]): void
  @LoggerService.wrapBuffer
  static debug(message: unknown, ...optionalParams: unknown[]) {
    this.staticInstanceRef?.debug?.(message, ...optionalParams)
  }

  /**
 * Write a 'verbose' level log.
 */
  static verbose(message: unknown, context?: string): void
  static verbose(message: unknown, ...optionalParams: [...unknown[], string]): void
  @LoggerService.wrapBuffer
  static verbose(message: unknown, ...optionalParams: unknown[]) {
    this.staticInstanceRef?.verbose?.(message, ...optionalParams)
  }

  /**
 * Write a 'fatal' level log.
 */
  static fatal(message: unknown, context?: string): void
  static fatal(message: unknown, ...optionalParams: [...unknown[], string]): void
  @LoggerService.wrapBuffer
  static fatal(message: unknown, ...optionalParams: unknown[]) {
    this.staticInstanceRef?.fatal?.(message, ...optionalParams)
  }

  /**
   * Write an 'error' level log.
   */
  error(message: unknown, stack?: string, context?: string): void
  error(message: unknown, ...optionalParams: [...unknown[], string, string]): void
  @LoggerService.wrapBuffer
  error(message: unknown, ...optionalParams: unknown[]) {
    optionalParams = this.context
      ? (optionalParams.length ? optionalParams : [undefined]).concat(this.context)
      : optionalParams

    this.localInstance.error(message, ...optionalParams)
  }

  /**
 * Write a 'log' level log.
 */
  log(message: unknown, context?: string): void
  log(message: unknown, ...optionalParams: [...unknown[], string]): void
  @LoggerService.wrapBuffer
  log(message: unknown, ...optionalParams: unknown[]) {
    optionalParams = this.context
      ? optionalParams.concat(this.context)
      : optionalParams
    this.localInstance.log(message, ...optionalParams)
  }

  /**
 * Write a 'warn' level log.
 */
  warn(message: unknown, context?: string): void
  warn(message: unknown, ...optionalParams: [...unknown[], string]): void
  @LoggerService.wrapBuffer
  warn(message: unknown, ...optionalParams: unknown[]) {
    optionalParams = this.context
      ? optionalParams.concat(this.context)
      : optionalParams
    this.localInstance.warn(message, ...optionalParams)
  }

  /**
 * Write a 'debug' level log.
 */
  debug(message: unknown, context?: string): void
  debug(message: unknown, ...optionalParams: [...unknown[], string]): void
  @LoggerService.wrapBuffer
  debug(message: unknown, ...optionalParams: unknown[]) {
    optionalParams = this.context
      ? optionalParams.concat(this.context)
      : optionalParams
    this.localInstance.debug?.(message, ...optionalParams)
  }

  /**
 * Write a 'verbose' level log.
 */
  verbose(message: unknown, context?: string): void
  verbose(message: unknown, ...optionalParams: [...unknown[], string]): void
  @LoggerService.wrapBuffer
  verbose(message: unknown, ...optionalParams: unknown[]) {
    optionalParams = this.context
      ? optionalParams.concat(this.context)
      : optionalParams
    this.localInstance.verbose?.(message, ...optionalParams)
  }

  /**
 * Write a 'fatal' level log.
 */
  fatal(message: unknown, context?: string): void
  fatal(message: unknown, ...optionalParams: [...unknown[], string]): void
  @LoggerService.wrapBuffer
  fatal(message: unknown, ...optionalParams: unknown[]) {
    optionalParams = this.context
      ? optionalParams.concat(this.context)
      : optionalParams
    this.localInstance.fatal?.(message, ...optionalParams)
  }

  private registerLocalInstanceRef() {
    if (this.localInstanceRef) {
      return this.localInstanceRef
    }
    this.localInstanceRef = new ConsoleLogger(this.context, {
      timestamp: this.options.timestamp,
      logLevels: LoggerService.logLevels,
    })
    return this.localInstanceRef
  }
}

export type {
  LogLevel,
  Logger as LoggerService,
}
export {
  LoggerService as Logger,
}
