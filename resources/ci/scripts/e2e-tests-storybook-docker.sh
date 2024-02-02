#!/bin/bash

# exit on error
set -e

echo
echo ' ------------------------------ '
echo '| CUSTOM BUILD SCRIPTS - START |'
echo ' ------------------------------ '
echo

echo "RUNNING SCRIPT: e2e-tests-storybook-docker.sh"
export BUILD_SCRIPT=uigov-web-components/resources/ci/scripts/e2e-tests-storybook.sh
cd resources/ci
docker compose run --quiet-pull build

echo
echo ' ------------------------------ '
echo '|  CUSTOM BUILD SCRIPTS - END  |'
echo ' ------------------------------ '
echo
