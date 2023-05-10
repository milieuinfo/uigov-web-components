#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: perform-all-web-tests.sh'
cd uigov-web-components
echo "npm install - no 'ci' to avoid the clean"
npm install --save-exact
echo "npm install yargs - specific to solve an issue with 'npx nx wct map' (that should not occur)"
npm install yargs@17.7.1 --save-dev
echo "run all web tests"
npm run build:all
npx nx wct map
