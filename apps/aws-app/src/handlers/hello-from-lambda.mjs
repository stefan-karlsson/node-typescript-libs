import middy from '@middy/core'

export const dbVar = new AsyncVar<DatabaseClient>('Database');
export const userVar = new AsyncVar<AuthClient>('Auth');

export class AuthClient {
    test() {
        return 'Works'
    }
}

export class DatabaseClient {
    test() {
        return 'Works aswell'
    }
}

// const withUserStoredInContext = (): middy.MiddlewareObj<APIGatewayProxyEventV2WithJWTAuthorizer, APIGatewayProxyStructuredResultV2> => {
//     return {
//       before: (handler: middy.Request<APIGatewayProxyEventV2WithJWTAuthorizer>) => {
//         const claims = Claims.parse(handler.event.requestContext.authorizer.jwt.claims)
//         claimsStorage.enterWith(claims)
//       },
//     }
//   }

//   export const handler = middy().use([withUserStoredInContext(), withOwnershipCheck()])

/**
 * A Lambda function that returns a static string
 */
export const helloFromLambdaHandler = async () => {
    const auth = new AuthClient();
    const db = new DatabaseClient();

    return (req, res, next) => {
        new AsyncScope(() => {
            userVar.set(auth);
            dbVar.set(db);
            next();
        });
    };
}