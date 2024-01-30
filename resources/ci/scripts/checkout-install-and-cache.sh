#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: checkout-install-and-cache.sh'
cd uigov-web-components

echo "npm ci"
npm ci --maxsockets 5 &> output-buffer.txt
if [ $? -eq 0 ]
  then
    echo "npm ci - success"
    echo "npm ci - success - begin of output" >&2
    cat output-buffer.txt
    echo "npm ci - success - end of output" >&2
  else
    echo "npm ci - error - begin of output" >&2
    cat output-buffer.txt
    echo "npm ci - error - end of output" >&2
fi
