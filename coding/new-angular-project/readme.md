# New Angular Project

## Update Angular CLI

```bash
sudo npm install -g @angular/cli@next
```

## New Project

```bash
ng new angular-tour-of-heroes
```

## Add ES Linter and Prettier

```bash
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier
```

Copy [`.eslintrs.js`](./.eslintrc.js) and [`.prettierrc.json`](./.prettierrc.json).

## Tailwind CSS

```bash
npm install -D tailwindcss
npm i @tailwindcss/typography @tailwindcss/forms
```

Copy [`tailwind.config.js`](./tailwind.config.js)

Add to `style.scss`:

```bash
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

To enable purge in production use:

```bash
NODE_ENV=production ng build
```

## Update to next stable version

```bash
ng update @angular/cli @angular/core
```
