#!/bin/sh

# Enter the source directory to make sure the script runs where the user expects
cd "/home/site/wwwroot"
pm2 start --no-daemon ecosystem.config.js --env development
