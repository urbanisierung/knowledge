# Dynamically load classes

Use case: extend functionality by just adding a new file into a folder.

## Interface

To be type safe it's recommended to implement an interface:

```ts
export interface MyInterface {
  some_function: (input: MyType) => void;
  another_function: (input: MyType2) => string;
}
```

## Classes to be imported

```ts
// myClass.ts
export default class MyClass implements MyInterface {
  async some_function(input: MyType) {
    // ...
  }

  another_function(input: MyType2) {
    // ...
  }
}
```

## Loader

```ts
import logger from "./Logger";
import * as fs from "fs";
import * as path from "path";
import { MyInterface } from "./MyInterface";

const MODULE_DIR_NAME = "modules";
const MODULE_DIR = path.join(__dirname, "..", MODULE_DIR_NAME);

export class MyLoader {
  public static async loadModules(): Promise<MyInterface[]> {
    logger.info(`MyLoader | Loading Classes`);
    const classes: MyInterface[] = [];
    const files = fs.readdirSync(MODULE_DIR);
    for (const file of files) {
      const moduleName = file.split(".")[0];
      logger.info(`MyLoader | Loading class <${file}>`);
      const Module = await import(`${MODULE_DIR}/${moduleName}`);
      try {
        const instanceOfModule = new Module.default();
        if (
          "some_function" in instanceOfModule &&
          "another_function" in instanceOfModule
        ) {
          logger.info(`MyLoader | Successfully loaded <${file}>`);
          classes.push(new Module.default());
        } else {
          logger.error(
            `MyLoader | Class <${file}> does not implement interface <MyInterface>. Ignoring class.`
          );
        }
      } catch (error) {
        logger.error(`MyLoader | Failed to load <${file}>`, { error });
      }
    }

    return classes;
  }
}
```
