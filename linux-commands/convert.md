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

## batch

Converts all `png` files, resizes them and saves the result in subfolder `webp`:

```bash
mogrify -resize 1000x500 -format webp -path ./webp *.png
```
