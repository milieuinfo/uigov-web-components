#!/bin/bash

# exit on error
set -e

echo "RUNNING SCRIPT: report-e2e-tests-storybook-docker.sh"
export BUILD_SCRIPT=uigov-web-components/resources/ci/scripts/report-e2e-tests-storybook.sh
cd resources/ci
echo 'docker-compose up -V'
docker-compose up -V --abort-on-container-exit --exit-code-from build
