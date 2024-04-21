import { AsyncLocalStorage } from 'node:async_hooks'

const asyncLocalStorage = new AsyncLocalStorage<RequestContext>()

export interface RequestContext {
  [key: symbol]: unknown
}
export class RequestContext {
  constructor(callback: () => void) {
    const parentScope = asyncLocalStorage.getStore()

    if (parentScope) {
      Object.setPrototypeOf(this, parentScope)
    }

    asyncLocalStorage.run(this, callback)
  }

  static get() {
    const scope = asyncLocalStorage.getStore()

    if (!scope) {
      throw new Error('Scope not found')
    }

    return scope
  }
}


// import { AsyncScope } from "../async-hooks/async-scope.js";

// export const userVar = new AsyncVar<AuthClient>('Auth');
// export const dbVar = new AsyncVar<DatabaseClient>('Database');

// export const bootstrapMiddleware = () => {
//     const auth = new AuthClient();
//     const db = new DatabaseClient();

//     return (req, res, next) => {
//         new AsyncScope(() => {
//             userVar.set(auth);
//             dbVar.set(db);
//             next();
//         });
//     };
// };
