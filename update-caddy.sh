#!/bin/sh
bun run build &&
cp build/* ../docker/caddy/site/cv.tteles.dev -r
