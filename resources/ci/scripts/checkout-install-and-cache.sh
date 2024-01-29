#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: checkout-install-and-cache.sh'
cd uigov-web-components

echo "npm ci"
npm ci --maxsockets 5 &> /dev/null
if [ $? -eq 0 ]
  then
    echo "npm ci - succesvol"
  else
    echo "npm ci - fout" >&2
fi
