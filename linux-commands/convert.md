# convert

## webp

```bash
convert in.png webp:lossless=false out.webp
```

## resize

```bash
convert in.png -resize 150x150 out.png
```

## svg to png with transparent background

```bash
mogrify -background none -format png in.svg
```
