# Express

## Session handling

Implement a session context for requests and use the data in all async execution.

### Express middleware

```ts
import { AsyncLocalStorage } from "async_hooks";
import crypto from "crypto";

export const asyncLocalStorage = new AsyncLocalStorage();

export enum SessionMapKey {
  SESSION_ID = "sessionId",
  USER_ID = "userId",
}

export function SessionMiddleware(_req, _res, next) {
  const sessionMap = new Map();
  sessionMap.set(SessionMapKey.SESSION_ID, crypto.randomUUID());
  asyncLocalStorage.run(sessionMap, () => {
    next();
  });
}
```

### Access session context

```ts
export function getByKey(key: SessionMapKey): string {
  const sessionMap: Map<string, string> = asyncLocalStorage.getStore() as Map<
    string,
    string
  >;
  let value = "unset";
  if (sessionMap) {
    value = sessionMap.get(key) || "unset";
  }
  return value;
}
```

### Set entry

```ts
export function setByKey(key: SessionMapKey, value: string) {
  const sessionMap: Map<string, string> = asyncLocalStorage.getStore() as Map<
    string,
    string
  >;
  if (sessionMap) {
    sessionMap.set(key, value);
  }
}
```

### Usage

Add middleware to server (or a route)

```ts
const app = express();
app.use(SessionMiddleware);
```

Use in a log message

```ts
// use a proper logging framework ;)
const sessionId = getByKey(SessionMapKey.SESSION_ID);
console.log(`${sessionId} | get request to flethy.com`);
```
