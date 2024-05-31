#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: unit-wct-component-integrator-tests.sh'
cd uigov-web-components

echo "npm install - no 'ci' to avoid the clean"
set +e
npm install --save-exact 2> buffer-stderr.txt 1> buffer-stdout.txt
if [ $? -eq 0 ]
  then
    echo "npm install - success"
  else
    echo "npm install - error - buffer-stderr.txt" >&2
    cat buffer-stderr.txt >&2
    cat buffer-stdout.txt >&2
    set -e
    exit $?
fi
set -e

echo "run all unit tests"
npx nx run-many --all --target=test --parallel --maxParallel=4 --skip-nx-cache

echo "run all web component tests (cypress)"
npx cypress run --component

echo "run the integrator e2e tests"
npm run integrator:test

echo "run the consumer e2e tests"
npm run consumer:install
npm run consumer:ci-test
