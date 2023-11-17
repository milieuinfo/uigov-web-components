#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: report-e2e-tests-storybook.sh'
cd uigov-web-components

echo "ls -l"
ls -l

# echo "npm install - no 'ci' to avoid the clean"
# npm install --save-exact

# Storybook mochawesome report
# echo "cd dist/cypress/apps/storybook-e2e/mochawesome-reports"
# cd dist/cypress/apps/storybook-e2e/mochawesome-reports
# echo "ls -la"
# ls -la
# cd ../../../../..
# echo "mochawesome report Storybook"
# mkdir dist/cypress/apps/storybook-e2e/mochawesome
# npx mochawesome-merge dist/cypress/apps/storybook-e2e/mochawesome-reports/*.json > dist/cypress/apps/storybook-e2e/mochawesome/output.json
# npx marge dist/cypress/apps/storybook-e2e/mochawesome/output.json --reportDir dist/cypress/apps/storybook-e2e/mochawesome --inline --reportFilename index.html --reportPageTitle "Storybook e2e tests" --reportTitle "UIGOV Webcomponents - Storybook e2e tests"

# Playground Lit mochawesome report
# echo "cd dist/cypress/apps/playground-lit-e2e/mochawesome-reports"
# cd dist/cypress/apps/playground-lit-e2e/mochawesome-reports
# echo "ls -la"
# ls -la
# cd ../../../../..
# echo "mochawesome report Playground Lit"
# mkdir dist/cypress/apps/playground-lit-e2e/mochawesome
# npx mochawesome-merge dist/cypress/apps/playground-lit-e2e/mochawesome-reports/*.json > dist/cypress/apps/playground-lit-e2e/mochawesome/output.json
# npx marge dist/cypress/apps/playground-lit-e2e/mochawesome/output.json --reportDir dist/cypress/apps/playground-lit-e2e/mochawesome --inline --reportFilename index.html --reportPageTitle "Playground Lit e2e tests" --reportTitle "UIGOV Webcomponents - Playground Lit e2e tests"

# Playground React mochawesome report
# echo "cd dist/cypress/apps/playground-react-e2e/mochawesome-reports"
# cd dist/cypress/apps/playground-react-e2e/mochawesome-reports
# echo "ls -la"
# ls -la
# cd ../../../../..
# echo "mochawesome report Playground React"
# mkdir dist/cypress/apps/playground-react-e2e/mochawesome
# npx mochawesome-merge dist/cypress/apps/playground-react-e2e/mochawesome-reports/*.json > dist/cypress/apps/playground-react-e2e/mochawesome/output.json
# npx marge dist/cypress/apps/playground-react-e2e/mochawesome/output.json --reportDir dist/cypress/apps/playground-react-e2e/mochawesome --inline --reportFilename index.html --reportPageTitle "Playground React e2e tests" --reportTitle "UIGOV Webcomponents - Playground React e2e tests"

# Playground Native mochawesome report
# echo "cd dist/cypress/apps/playground-native-e2e/mochawesome-reports"
# cd dist/cypress/apps/playground-native-e2e/mochawesome-reports
# echo "ls -la"
# ls -la
# cd ../../../../..
# echo "mochawesome report Playground Native"
# mkdir dist/cypress/apps/playground-native-e2e/mochawesome
# npx mochawesome-merge dist/cypress/apps/playground-native-e2e/mochawesome-reports/*.json > dist/cypress/apps/playground-native-e2e/mochawesome/output.json
# npx marge dist/cypress/apps/playground-native-e2e/mochawesome/output.json --reportDir dist/cypress/apps/playground-native-e2e/mochawesome --inline --reportFilename index.html --reportPageTitle "Playground Native e2e tests" --reportTitle "UIGOV Webcomponents - Playground Native e2e tests"

# Libs mochawesome report
# echo "cd dist/cypress/libs/mochawesome-reports"
# cd dist/cypress/libs/mochawesome-reports
# echo "ls -la"
# ls -la
# cd ../../../..
# echo "mochawesome report libs"
# mkdir dist/cypress/libs/mochawesome
# npx mochawesome-merge dist/cypress/libs/mochawesome-reports/*.json > dist/cypress/libs/mochawesome/output.json
# npx marge dist/cypress/libs/mochawesome/output.json --reportDir dist/cypress/libs/mochawesome --inline --reportFilename index.html --reportPageTitle "Libs component tests" --reportTitle "UIGOV Webcomponents - Libs component tests"
