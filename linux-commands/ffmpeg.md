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

## Video to Gif conversion

Script:

```bash
#!/bin/sh

# example:
# ./gifenc.sh input.mov output.gif 720 10
# https://superuser.com/a/939527

palette="/tmp/palette.png"

filters="fps=$4,scale=$3:-1:flags=lanczos"

ffmpeg -v warning -i "$1" -vf "$filters,palettegen" -y "$palette"
ffmpeg -v warning -i "$1" -i $palette -lavfi "$filters [x]; [x][1:v] paletteuse" -y "$2"
```

## webm to mp4 and speed up

```bash
# convert to mp4
ffmpeg -i complete-process-send-presentation-content.webm -preset ultrafast complete-process-send-presentation-content.mp4
ffmpeg -i complete-process-send-presentation-content.webm -movflags faststart complete-process-send-presentation-content.mp4

# speed up
ffmpeg -i complete-process-send-presentation-content.mp4 -preset ultrafast -filter:v "setpts=0.1*PTS" complete-process-send-presentation-content-x10.mp4
ffmpeg -i complete-process-send-presentation-content.mp4 -preset ultrafast -filter:v "setpts=0.05*PTS" complete-process-send-presentation-content-x20.mp4
```

### script

```bash
#!/bin/sh

echo "converting to mp4"
ffmpeg -i $1.webm -preset ultrafast $1.mp4

echo "increase speed"
ffmpeg -i $1.mp4 -preset ultrafast -filter:v "setpts=PTS/$2" $1-x$2.mp4
```
