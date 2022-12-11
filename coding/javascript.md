# TypeScript / JavaScript

## Split sentences

```js
const segmenter = new Intl.Segmenter("en", { granularity: "sentence" });

console.log(
  Array.from(
    segmenter.segment(`I'm like 🫣. But you are, too! 🫵`),
    (s) => s.segment
  )
);
```

## Conditional Types

```ts
type ExtractIdType<T> = T extends { id: string | number } ? T["id"] : never;

interface NumericId {
  id: number;
}

interface StringId {
  id: string;
}

interface BooleanId {
  id: boolean;
}

type NumericIdType = ExtractIdType<NumericId>; // type NumericIdType = number
type StringIdType = ExtractIdType<StringId>; // type StringIdType = string
type BooleanIdType = ExtractIdType<BooleanId>; // type BooleanIdType = never
```

### NonNullable

```ts
type NonNullable<T> = T extends null | undefined ? never : T;
type A = NonNullable<number>; // number
type B = NonNullable<number | null>; // number
type C = NonNullable<number | undefined>; // number
type D = NonNullable<null | undefined>; // never
```

### Extract<T, U> and Exclude<T, U>

```ts
type Extract<T, U> = T extends U ? T : never;
type Exclude<T, U> = T extends U ? never : T;

type A = Extract<string | string[], any[]>; // string[]
type B = Exclude<string | string[], any[]>; // string

type C = Extract<number, boolean>; // never
type D = Exclude<number, boolean>; // number
```

### Parameters<T> and ReturnType<T>

```ts
type Parameters<T> = T extends (...args: infer P) => any ? P : never;
type ReturnType<T> = T extends (...args: any) => infer R ? R : any;
type A = Parameters<(n: number, s: string) => void>; // [n: number, s: string]
type B = ReturnType<(n: number, s: string) => void>; // void

type C = Parameters<() => () => void>; // []
type D = ReturnType<() => () => void>; // () => void
type E = ReturnType<D>; // void
```

### ConstructorParameters<T> and InstanceType<T>

```ts
type ConstructorParameters<T> = T extends new (...args: infer P) => any
  ? P
  : never;
type InstanceType<T> = T extends new (...args: any[]) => infer R ? R : any;

interface PointConstructor {
  new (x: number, y: number): Point;
}

class Point {
  private x: number;

  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

type A = ConstructorParameters<PointConstructor>; // [x: number, y: number]
type B = InstanceType<PointConstructor>; // Point
```
