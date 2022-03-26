# ffmpeg

## Image Manipulation

```bash
# resize
convert *.jpg -resize 600x600 converted.jpg # resize

# jpg to webp
convert *.jpg -define webp:lossless=false converted.webp # convert to webp
```

## Video Manipulation

```bash
# webm to mp4
ffmpeg -i ${in.webm} -crf 10 ${out.mp4}

# webm to mov
ffmpeg -i ${in.webm} -c copy -f mov ${out.mov}

# webm to gif
ffmpeg -i ${in.webm} -pix_fmt rgb8 ${out.gif}
```
