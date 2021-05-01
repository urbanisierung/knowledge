# Firebase

## Secrets

```bash
# set
firebase functions:config:set scope.name=""

# get
firebase functions:config:get scope.name=""

# for local dev
firebase functions:config:get > .runtimeconfig.json
```

## CI Token

```bash
firebase login:ci
```

## Storage

To sign URLs from Bucket:

- Enable Service IAM for Project
- Add Role to user
  - Role: `Service Account Token Creator` (search for `JWT`)
  - User: `...@appspot.gserviceaccount.com`
  - URL: `https://console.cloud.google.com/iam-admin/iam?project=...`

## Github Action

```yaml
name: deploy

on:
  push:
    tags:
      - "[0-9]+.[0-9]+.[0-9]"

jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repo
        uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 14
          registry-url: "https://registry.npmjs.org"
      - name: Install Dependencies
        run: npm ci
        working-directory: ./functions
      - name: Build
        run: npm run build
        working-directory: ./functions
      - name: Deploy to Firebase
        uses: urbanisierung/firebase-action@master
        with:
          args: deploy --only functions
        env:
          FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
```
