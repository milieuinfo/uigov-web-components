#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: unit-wct-component-playground-tests.sh'
cd uigov-web-components
echo "npm install - no 'ci' to avoid the clean"
npm install --save-exact
echo "npm install yargs - specific to solve an issue with 'npx nx wct map' (that should not occur)"
npm install yargs@17.7.1 --save-dev
echo "Looks like Playwright Test or Playwright was just installed or updated."
echo "Please run the following command to download new browsers: 'npx playwright install'"
npx playwright install
echo "run all unit tests"
npx nx run-many --all --target=test --parallel --maxParallel=4 --skip-nx-cache
echo "run all web component tests (wct)"
npm run test:wct
echo "run all web component tests (cypress)"
npx cypress run --component
