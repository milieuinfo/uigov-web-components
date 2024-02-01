#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: checkout-install-and-cache.sh'
cd uigov-web-components

echo "npm ci"
npm ci --maxsockets 5 2> buffer-stderr.txt 1> buffer-stdout.txt
if [ $? -eq 0 ]
  then
    echo "npm ci - success"
  else
    echo "npm ci - error - buffer-stderr.txt" >&2
    cat buffer-stderr.txt>&2
    sleep 2
fi
