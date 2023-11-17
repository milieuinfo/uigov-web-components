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

echo "run the playground-lit e2e tests"
npm run playground-lit:ci-test

echo "run the playground-react e2e tests"
npm run playground-react:ci-test

echo "run the playground-native e2e tests"
npm run playground-native:ci-test

# Playground Lit mochawesome report
echo "cd dist/cypress/apps/playground-lit-e2e/mochawesome-reports"
cd dist/cypress/apps/playground-lit-e2e/mochawesome-reports
echo "ls -la"
ls -la
cd ../../../../..
echo "mochawesome report Playground Lit"
mkdir dist/cypress/apps/playground-lit-e2e/mochawesome
npx mochawesome-merge dist/cypress/apps/playground-lit-e2e/mochawesome-reports/*.json > dist/cypress/apps/playground-lit-e2e/mochawesome/output.json
npx marge dist/cypress/apps/playground-lit-e2e/mochawesome/output.json --reportDir dist/cypress/apps/playground-lit-e2e/mochawesome --inline --reportFilename index.html --reportPageTitle "Playground Lit e2e tests" --reportTitle "UIGOV Webcomponents - Playground Lit e2e tests"

# Playground React mochawesome report
echo "cd dist/cypress/apps/playground-react-e2e/mochawesome-reports"
cd dist/cypress/apps/playground-react-e2e/mochawesome-reports
echo "ls -la"
ls -la
cd ../../../../..
echo "mochawesome report Playground React"
mkdir dist/cypress/apps/playground-react-e2e/mochawesome
npx mochawesome-merge dist/cypress/apps/playground-react-e2e/mochawesome-reports/*.json > dist/cypress/apps/playground-react-e2e/mochawesome/output.json
npx marge dist/cypress/apps/playground-react-e2e/mochawesome/output.json --reportDir dist/cypress/apps/playground-react-e2e/mochawesome --inline --reportFilename index.html --reportPageTitle "Playground React e2e tests" --reportTitle "UIGOV Webcomponents - Playground React e2e tests"

# Playground Native mochawesome report
echo "cd dist/cypress/apps/playground-native-e2e/mochawesome-reports"
cd dist/cypress/apps/playground-native-e2e/mochawesome-reports
echo "ls -la"
ls -la
cd ../../../../..
echo "mochawesome report Playground Native"
mkdir dist/cypress/apps/playground-native-e2e/mochawesome
npx mochawesome-merge dist/cypress/apps/playground-native-e2e/mochawesome-reports/*.json > dist/cypress/apps/playground-native-e2e/mochawesome/output.json
npx marge dist/cypress/apps/playground-native-e2e/mochawesome/output.json --reportDir dist/cypress/apps/playground-native-e2e/mochawesome --inline --reportFilename index.html --reportPageTitle "Playground Native e2e tests" --reportTitle "UIGOV Webcomponents - Playground Native e2e tests"

# Libs mochawesome report
echo "cd dist/cypress/libs/mochawesome-reports"
cd dist/cypress/libs/mochawesome-reports
echo "ls -la"
ls -la
cd ../../../..
echo "mochawesome report libs"
mkdir dist/cypress/libs/mochawesome
npx mochawesome-merge dist/cypress/libs/mochawesome-reports/*.json > dist/cypress/libs/mochawesome/output.json
npx marge dist/cypress/libs/mochawesome/output.json --reportDir dist/cypress/libs/mochawesome --inline --reportFilename index.html --reportPageTitle "Libs component tests" --reportTitle "UIGOV Webcomponents - Libs component tests"
