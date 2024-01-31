#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: checkout-install-and-cache.sh'
cd uigov-web-components

echo "npm ci"
npm ci --maxsockets 5 2> error-buffer.txt 1> output-buffer.txt
if [ $? -eq 0 ]
  then
    echo "npm ci - success"
  else
    echo "npm ci - error - ERROR-BUFFER" >&2
    cat error-buffer.txt >&2
    sleep 2
fi
