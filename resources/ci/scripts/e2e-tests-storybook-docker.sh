#!/bin/bash

# exit on error
set -e

echo "RUNNING SCRIPT: e2e-tests-storybook-docker-${1}.sh"
export BUILD_SCRIPT=uigov-web-components/resources/ci/scripts/e2e-tests-storybook-${1}.sh
cd resources/ci
echo 'docker-compose up -V'
docker-compose up -V --abort-on-container-exit --exit-code-from build
