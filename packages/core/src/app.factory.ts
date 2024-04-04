import { CreateAppContextOptions } from "./app-context/create-app-context.options.js";

export class AppFactoryStatic {
/**
 * Creates an instance of NestApplicationContext.
 *
 * @param entryModule Entry (root) application module class
 * @param options Optional Nest application configuration
 *
 * @returns A promise that, when resolved,
 * contains a reference to the NestApplicationContext instance.
 */
    static createApplicationContext(_entryModule: any, _options?: CreateAppContextOptions) {
    }
}

/**
 * Use AppFactory to create an application instance.
 *
 * ### Specifying an entry module
 *
 * Pass the required *root module* for the application via the module parameter.
 * By convention, it is usually called `ApplicationModule`.  Starting with this
 * module, Nest assembles and initiates the code needed to launch your
 * application.
 *
 * @publicApi
 */
export const AppFactory = new AppFactoryStatic();