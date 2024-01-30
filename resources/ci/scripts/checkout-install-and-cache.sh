#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: checkout-install-and-cache.sh'
cd uigov-web-components

echo "npm ci"
npm ci --maxsockets 5 &> /dev/null
if [ $? -eq 0 ]
  then
    echo "npm ci - success" >&2
  else
    echo "npm ci - error" >&2
fi
