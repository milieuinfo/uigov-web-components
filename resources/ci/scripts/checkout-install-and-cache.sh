#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: checkout-install-and-cache.sh'
cd uigov-web-components

echo "npm ci"
npm ci --maxsockets 5 &> output-buffer.txt
if [ $? -eq 0 ]
  then
#    echo "npm ci - success"
    echo "npm ci - success - output of buffer" >&2
    cat output-buffer.txt >&2
  else
    echo "npm ci - error - output of buffer" >&2
    cat output-buffer.txt >&2
fi
