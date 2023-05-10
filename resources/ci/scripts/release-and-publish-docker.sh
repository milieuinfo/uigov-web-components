#!/bin/bash

# exit on error
set -e

echo "RUNNING SCRIPT: release-and-publish-docker.sh"
export BUILD_SCRIPT=uigov-web-components/resources/ci/scripts/release-and-publish.sh
cd resources/ci
echo 'docker-compose up -V'
docker-compose up -V --abort-on-container-exit --exit-code-from build
