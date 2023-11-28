#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: unit-wct-component-playground-tests-docker.sh'
export BUILD_SCRIPT=uigov-web-components/resources/ci/scripts/unit-wct-component-playground-tests.sh
cd resources/ci
echo 'docker-compose up -V'
docker-compose up -V --abort-on-container-exit --exit-code-from build
