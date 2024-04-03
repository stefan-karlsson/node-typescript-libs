import { LogLevel, LoggerService } from "./logging/logger.service.js";

export class ApplicationContextOptions {
  /**
   * Specifies the logger to use.  Pass `false` to turn off logging.
   */
  logger?: LoggerService | LogLevel[] | false;
}