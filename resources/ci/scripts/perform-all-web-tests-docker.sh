#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: perform-all-web-tests-docker.sh'
export BUILD_SCRIPT=uigov-web-components/resources/ci/scripts/perform-all-web-tests.sh
cd resources/ci
echo 'docker-compose up -V'
docker-compose up -V --abort-on-container-exit --exit-code-from build