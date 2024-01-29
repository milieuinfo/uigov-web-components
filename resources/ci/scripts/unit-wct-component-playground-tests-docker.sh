#!/bin/bash

# exit on error
set -e

echo
echo ' ------------------------------ '
echo '| CUSTOM BUILD SCRIPTS - BEGIN |'
echo ' ------------------------------ '
echo

echo 'RUNNING SCRIPT: unit-wct-component-playground-tests-docker.sh'
export BUILD_SCRIPT=uigov-web-components/resources/ci/scripts/unit-wct-component-playground-tests.sh
cd resources/ci
docker compose run --quiet-pull build

echo
echo ' ------------------------------ '
echo '|  CUSTOM BUILD SCRIPTS - END  |'
echo ' ------------------------------ '
echo
