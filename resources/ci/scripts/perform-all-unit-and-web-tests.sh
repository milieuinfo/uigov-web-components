#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: perform-all-unit-and-web-tests.sh'
cd uigov-web-components
echo "npm install - no 'ci' to avoid the clean"
npm install --save-exact
echo "npm install yargs - specific to solve an issue with 'npx nx wct map' (that should not occur)"
npm install yargs@17.7.1 --save-dev
echo "run all unit tests"
npx nx run-many --all --target=test --parallel --maxParallel=4 --skip-nx-cache
echo "run all web component tests (wct)"
npm run test:wct
echo "run all web component tests (cypress)"
npx cypress run --component
