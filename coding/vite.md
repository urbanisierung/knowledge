# Vite

## Use Env Vars in Vite

Install [vite-plugin-html-env](https://www.npmjs.com/package/vite-plugin-html-env) with

```bash
pnpm add vite-plugin-html-env
# or
yarn add vite-plugin-html-env
# or
npm i vite-plugin-html-env
```

In `vite.config.js` add:

```js
import VitePluginHtmlEnv from "vite-plugin-html-env";
// ...

export default defineConfig({
  // ...
  build: {
    // ...
    plugins: [
      VitePluginHtmlEnv({
        compiler: true,
      }),
    ],
    // ...
  },
});
```

Usage:

```html
<script
  vite-if="import.meta.env.VITE_ENV === dev || import.meta.env.VITE_ENV === stage"
>
  <!-- ... -->
</script>
```
