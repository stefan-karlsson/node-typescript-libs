import { Logger, LogLevel } from "@aviene/common";

export class CreateAppContextOptions {
    /**
      * Specifies the logger to use.  Pass `false` to turn off logging.
      */
    logger?: Logger | LogLevel[] | false;

}