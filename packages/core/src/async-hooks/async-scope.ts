import { AsyncLocalStorage } from "node:async_hooks";

const asyncLocalStorage = new AsyncLocalStorage<AsyncScope>();

export interface AsyncScope {
    [key: symbol]: unknown;
}

export class AsyncScope {
    static get() {
        const scope = asyncLocalStorage.getStore();
        if (!scope) {
            throw new Error('Scope not found');
        }

        return scope;
    }

    constructor(callback: () => void) {
        const parentScope = asyncLocalStorage.getStore();
        if (parentScope) {
            Object.setPrototypeOf(this, parentScope);
        }

        asyncLocalStorage.run(this, callback);
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