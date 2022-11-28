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
