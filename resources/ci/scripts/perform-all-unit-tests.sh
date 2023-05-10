#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: perform-all-unit-tests.sh'
cd uigov-web-components
echo "npm install - no 'ci' to avoid the clean"
npm install --save-exact
echo "run all unit tests"
npx nx run-many --all --target=test --parallel --maxParallel=4 --skip-nx-cache
