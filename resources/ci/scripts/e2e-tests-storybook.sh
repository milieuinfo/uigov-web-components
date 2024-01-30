#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: e2e-tests-storybook.sh'
cd uigov-web-components

echo "npm install - no 'ci' to avoid the clean"
npm install --save-exact &> /dev/null
if [ $? -eq 0 ]
  then
    echo "npm install - success"
  else
    echo "npm install - error" >&2
fi

echo "run the e2e tests"
npm run storybook:ci-test
