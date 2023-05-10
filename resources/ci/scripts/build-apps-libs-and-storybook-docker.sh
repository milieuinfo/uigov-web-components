#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: build-apps-libs-and-storybook-docker.sh'
export BUILD_SCRIPT=uigov-web-components/resources/ci/scripts/build-apps-libs-and-storybook.sh
cd resources/ci
echo 'docker-compose up -V'
docker-compose up -V --abort-on-container-exit --exit-code-from build
