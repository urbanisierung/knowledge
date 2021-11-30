# Web3 in Angular Projects

Install dependencies:

```bash
npm i web3
npm i crypto-browserify stream-browserify assert stream-http https-browserify os-browserify browser
```

Update `polyfill.ts`:

```bash
;(window as any).global = window
let global: any = window
import { Buffer } from 'buffer'
global.Buffer = Buffer
global.process = {
  env: { DEBUG: undefined },
  version: '',
} as any
```

Update `tsconfig.json` (under `compilerOptions`):

```bash
"paths": {
    "crypto": ["./node_modules/crypto-browserify"],
    "stream": ["./node_modules/stream-browserify"],
    "assert": ["./node_modules/assert"],
    "http": ["./node_modules/stream-http"],
    "https": ["./node_modules/https-browserify"],
    "os": ["./node_modules/os-browserify"],
    "process": ["./node_modules/process/browser"]
}
```
