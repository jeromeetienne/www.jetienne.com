#!/bin/bash

# get info from the command line
URL=$1
FNAME=$2

# define some constant
PHANTOMJS_HOME="$HOME/opt/phantomjs"

# generate the image with phantom.js
# - take a snapshot with a page 960x720
# - there is a delay which can be big or not depending on the page
$PHANTOMJS_HOME/bin/phantomjs $PHANTOMJS_HOME/examples/rasterize.js "$URL" "$FNAME"

# reduce the image to 960x720
mogrify -crop 960x720+0+0 "$FNAME"

# reduce the image to 320x240
mogrify -resize 320x240 "$FNAME"