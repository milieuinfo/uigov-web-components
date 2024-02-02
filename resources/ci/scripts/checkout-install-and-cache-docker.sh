#!/bin/bash

# exit on error
set -e

echo
echo ' ------------------------------ '
echo '| CUSTOM BUILD SCRIPTS - START |'
echo ' ------------------------------ '
echo

echo 'RUNNING SCRIPT: checkout-install-and-cache-docker.sh'
export BUILD_SCRIPT=uigov-web-components/resources/ci/scripts/checkout-install-and-cache.sh
cd resources/ci
docker compose run --quiet-pull build

echo
echo ' ------------------------------ '
echo '|  CUSTOM BUILD SCRIPTS - END  |'
echo ' ------------------------------ '
echo
