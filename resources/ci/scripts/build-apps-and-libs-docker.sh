#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: build-apps-and-libs-docker.sh'
export BUILD_SCRIPT=uigov-web-components/resources/ci/scripts/build-apps-and-libs.sh
cd resources/ci
echo 'docker-compose up -V'
docker-compose up -V --abort-on-container-exit --exit-code-from build