#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: report-e2e-tests-storybook.sh'
cd uigov-web-components

echo "ls -l"
ls -l

echo "cd dist/cypress/apps/storybook-e2e/mochawesome-reports"
cd dist/cypress/apps/storybook-e2e/mochawesome-reports
echo "ls -la"
ls -la
cd ../../../../..

echo "npm install - no 'ci' to avoid the clean"
npm install --save-exact
echo "mochawesome report"
mkdir dist/cypress/apps/storybook-e2e/mochawesome
npx mochawesome-merge dist/cypress/apps/storybook-e2e/mochawesome-reports/*.json > dist/cypress/apps/storybook-e2e/mochawesome/output.json
npx marge dist/cypress/apps/storybook-e2e/mochawesome/output.json --reportDir dist/cypress/apps/storybook-e2e/mochawesome --inline --reportFilename index.html --reportPageTitle "Storybook e2e tests" --reportTitle "UIGOV Webcomponents - Storybook e2e tests"
