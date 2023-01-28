# Wrangler

## Publish worker

```bash
wrangler publish --env $NAME
```

## Secrets bulk update

```bash
wrangler secret:bulk SECRETS.json
```

SECRETS.json:

```json
{
  "NAME": "VALUE"
}
```
