#!/bin/bash

# exit on error
set -e

echo
echo ' ------------------------------ '
echo '| CUSTOM BUILD SCRIPTS - START |'
echo ' ------------------------------ '
echo

echo "RUNNING SCRIPT: release-and-publish-docker.sh"
export BUILD_SCRIPT=uigov-web-components/resources/ci/scripts/release-and-publish.sh
cd resources/ci
docker compose --quiet-pull run build

echo
echo ' ------------------------------ '
echo '|  CUSTOM BUILD SCRIPTS - END  |'
echo ' ------------------------------ '
echo
