import { styleText, colorizeText } from '@aviene/ansi-escape'
import { isFunction, isObject, isString, isUndefined } from '../utils/index.js'
import { type LoggerService, type LogLevel } from './logger.service.js'
import { isLogLevelEnabled } from './is-log-level-enabled.util.js'

interface ConsoleLoggerOptions {
  /**
   * Enabled log levels.
   */
  logLevels?: LogLevel[]
  /**
   * If enabled, will print timestamp (time difference) between current and previous log message.
   */
  timestamp?: boolean

  /**
   * The locale or locales to use
   *
   * See [MDN - Intl - locales argument](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
   */
  dateTimeFormat?: Intl.DateTimeFormat
}

const DEFAULT_LOG_LEVELS: LogLevel[] = [
  'log',
  'error',
  'warn',
  'debug',
  'verbose',
  'fatal',
]

export class ConsoleLogger implements LoggerService {
  private static lastTimestampAt?: number
  protected context?: string
  protected options?: ConsoleLoggerOptions = {}

  private originalContext?: string
  private dateTimeFormat: Intl.DateTimeFormat

  constructor(context?: string, options?: ConsoleLoggerOptions)
  constructor(
    context?: string,
    options: ConsoleLoggerOptions = {},
  ) {
    this.context = context
    this.options = options

    // eslint-disable-next-line no-undefined
    this.dateTimeFormat = options.dateTimeFormat ?? new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      day: '2-digit',
      month: '2-digit',
    })

    if (!options.logLevels) {
      options.logLevels = DEFAULT_LOG_LEVELS
    }

    if (context) {
      this.originalContext = context
    }
  }

  /**
   * Write a 'log' level log, if the configured level allows for it.
   * Prints to `stdout` with newline.
   */
  log(message: unknown, context?: string): void
  log(message: unknown, ...optionalParams: [...unknown[], string]): void
  log(message: unknown, ...optionalParams: unknown[]) {
    if (!this.isLevelEnabled('log')) {
      return
    }
    const { messages, context } = this.getContextAndMessagesToPrint([
      message,
      ...optionalParams,
    ])
    this.printMessages(messages, context, 'log')
  }

  /**
   * Write an 'error' level log, if the configured level allows for it.
   * Prints to `stderr` with newline.
   */
  error(message: unknown, stack?: string, context?: string): void
  error(message: unknown, ...optionalParams: [...unknown[], string, string]): void
  error(message: unknown, ...optionalParams: unknown[]) {
    if (!this.isLevelEnabled('error')) {
      return
    }
    const { messages, context, stack }
      = this.getContextAndStackAndMessagesToPrint([message, ...optionalParams])

    this.printMessages(messages, context, 'error', 'stderr')
    this.printStackTrace(stack ?? '')
  }

  /**
   * Write a 'warn' level log, if the configured level allows for it.
   * Prints to `stdout` with newline.
   */
  warn(message: unknown, context?: string): void
  warn(message: unknown, ...optionalParams: [...unknown[], string]): void
  warn(message: unknown, ...optionalParams: unknown[]) {
    if (!this.isLevelEnabled('warn')) {
      return
    }
    const { messages, context } = this.getContextAndMessagesToPrint([
      message,
      ...optionalParams,
    ])
    this.printMessages(messages, context, 'warn')
  }

  /**
   * Write a 'debug' level log, if the configured level allows for it.
   * Prints to `stdout` with newline.
   */
  debug(message: unknown, context?: string): void
  debug(message: unknown, ...optionalParams: [...unknown[], string]): void
  debug(message: unknown, ...optionalParams: unknown[]) {
    if (!this.isLevelEnabled('debug')) {
      return
    }
    const { messages, context } = this.getContextAndMessagesToPrint([
      message,
      ...optionalParams,
    ])
    this.printMessages(messages, context, 'debug')
  }

  /**
   * Write a 'verbose' level log, if the configured level allows for it.
   * Prints to `stdout` with newline.
   */
  verbose(message: unknown, context?: string): void
  verbose(message: unknown, ...optionalParams: [...unknown[], string]): void
  verbose(message: unknown, ...optionalParams: unknown[]) {
    if (!this.isLevelEnabled('verbose')) {
      return
    }
    const { messages, context } = this.getContextAndMessagesToPrint([
      message,
      ...optionalParams,
    ])
    this.printMessages(messages, context, 'verbose')
  }

  /**
   * Write a 'fatal' level log, if the configured level allows for it.
   * Prints to `stdout` with newline.
   */
  fatal(message: unknown, context?: string): void
  fatal(message: unknown, ...optionalParams: [...unknown[], string]): void
  fatal(message: unknown, ...optionalParams: unknown[]) {
    if (!this.isLevelEnabled('fatal')) {
      return
    }
    const { messages, context } = this.getContextAndMessagesToPrint([
      message,
      ...optionalParams,
    ])
    this.printMessages(messages, context, 'fatal')
  }

  /**
   * Set log levels
   * @param levels log levels
   */
  setLogLevels(levels: LogLevel[]) {
    if (!this.options) {
      this.options = {}
    }
    this.options.logLevels = levels
  }

  /**
   * Set logger context
   * @param context context
   */
  setContext(context: string) {
    this.context = context
  }

  /**
   * Resets the logger context to the value that was passed in the constructor.
   */
  resetContext() {
    this.context = this.originalContext
  }

  isLevelEnabled(level: LogLevel): boolean {
    const logLevels = this.options?.logLevels
    return isLogLevelEnabled(level, logLevels)
  }

  protected getTimestamp(): string {
    return this.dateTimeFormat.format(Date.now())
  }

  protected printMessages(
    messages: unknown[],
    context = '',
    logLevel: LogLevel = 'log',
    writeStreamType?: 'stdout' | 'stderr',
  ) {
    messages.forEach(message => {
      const pidMessage = this.formatPid(process.pid)
      const contextMessage = this.formatContext(context)
      const timestampDiff = this.updateAndGetTimestampDiff()
      const formattedLogLevel = logLevel.toUpperCase().padStart(7, ' ')
      const formattedMessage = this.formatMessage(
        logLevel,
        message,
        pidMessage,
        formattedLogLevel,
        contextMessage,
        timestampDiff,
      )

      process[writeStreamType ?? 'stdout'].write(formattedMessage)
    })
  }

  protected formatPid(pid: number) {
    return `[Aviene] ${pid}  - `
  }

  protected formatContext(context: string): string {
    return context ? colorizeText.yellow(`[${context}] `) : ''
  }

  // eslint-disable-next-line max-params
  protected formatMessage(
    logLevel: LogLevel,
    message: unknown,
    pidMessage: string,
    formattedLogLevel: string,
    contextMessage: string,
    timestampDiff: string,
  ) {
    const output = this.stringifyMessage(message, logLevel)
    pidMessage = this.colorize(pidMessage, logLevel)
    formattedLogLevel = this.colorize(formattedLogLevel, logLevel)
    return `${pidMessage}${this.getTimestamp()} ${formattedLogLevel} ${contextMessage}${output}${timestampDiff}\n`
  }

  protected stringifyMessage(message: unknown, logLevel: LogLevel): string {
    if (isFunction(message)) {
      const messageAsStr = Function.prototype.toString.call(message)
      const isClass = messageAsStr.startsWith('class ')

      if (isClass) {
        // If the message is a class, we will display the class name.
        return this.stringifyMessage(message.name, logLevel)
      }
      // If the message is a non-class function, call it and re-resolve its value.
      return this.stringifyMessage(message(), logLevel)
    }

    return isObject(message) || Array.isArray(message)
      ? `${this.colorize('Object:', logLevel)}\n${JSON.stringify(
        message,
        (_, value) =>
          typeof value === 'bigint' ? value.toString() : value as unknown,
        2,
      )}\n`
      : this.colorize(message as string, logLevel)
  }

  protected colorize(message: string, logLevel: LogLevel) {
    const color = this.getColorByLogLevel(logLevel)
    return color(message)
  }

  protected printStackTrace(stack: string) {
    if (!stack) {
      return
    }
    process.stderr.write(`${stack}\n`)
  }

  protected updateAndGetTimestampDiff(): string {
    const lastTimestampAt = ConsoleLogger.lastTimestampAt
    const includeTimestamp = lastTimestampAt && this.options?.timestamp
    const result = includeTimestamp
      ? this.formatTimestampDiff(Date.now() - lastTimestampAt)
      : ''
    ConsoleLogger.lastTimestampAt = Date.now()
    return result
  }

  protected formatTimestampDiff(timestampDiff: number) {
    return colorizeText.yellow(` +${timestampDiff}ms`)
  }

  private getContextAndMessagesToPrint(args: unknown[]) {
    if (args.length <= 1) {
      return { messages: args, context: this.context }
    }
    const lastElement = args[args.length - 1]
    const isContext = isString(lastElement)

    if (!isContext) {
      return { messages: args, context: this.context }
    }
    return {
      context: lastElement,
      messages: args.slice(0, args.length - 1),
    }
  }

  private getContextAndStackAndMessagesToPrint(args: unknown[]) {
    if (args.length === 2) {
      return this.isStackFormat(args[1])
        ? {
          messages: [args[0]],
          stack: args[1] as string,
          context: this.context,
        }
        : {
          messages: [args[0]],
          context: args[1] as string,
        }
    }

    const { messages, context } = this.getContextAndMessagesToPrint(args)

    if (messages.length <= 1) {
      return { messages, context }
    }

    const lastElement = messages[messages.length - 1]
    const isStack = isString(lastElement)

    if (!isStack && !isUndefined(lastElement)) {
      return { messages, context }
    }

    return {
      stack: lastElement,
      messages: messages.slice(0, messages.length - 1),
      context,
    }
  }

  private isStackFormat(stack: unknown) {
    if (!isString(stack)) {
      return false
    }

    return /^(?:.)+\n\s+at .+:\d+:\d+/u.test(stack)
  }

  private getColorByLogLevel(level: LogLevel) {
    switch (level) {
      case 'debug':
        return colorizeText.magenta
      case 'warn':
        return colorizeText.yellow
      case 'error':
        return colorizeText.red
      case 'verbose':
        return colorizeText.cyan
      case 'fatal':
        return styleText.bold
      default:
        return colorizeText.green
    }
  }
}
export type { ConsoleLoggerOptions }
