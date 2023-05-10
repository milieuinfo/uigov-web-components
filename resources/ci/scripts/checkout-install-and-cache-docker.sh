#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: checkout-install-and-cache-docker.sh'
export BUILD_SCRIPT=uigov-web-components/resources/ci/scripts/checkout-install-and-cache.sh
cd resources/ci
echo 'docker-compose up -V'
docker-compose up -V --abort-on-container-exit --exit-code-from build
