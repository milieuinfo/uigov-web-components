#!/bin/bash

# exit on error
set -e

echo
echo ' ------------------------------ '
echo '| CUSTOM BUILD SCRIPTS - START |'
echo ' ------------------------------ '
echo

echo 'RUNNING SCRIPT: build-apps-and-libs-docker.sh'
export BUILD_SCRIPT=uigov-web-components/resources/ci/scripts/build-apps-and-libs.sh
cd resources/ci
echo "docker-compose run build"
docker-compose run build
if [ $? -eq 0 ]
  then
    echo "docker-compose run build - success"
  else
    echo "docker-compose run build - error"
fi

echo
echo ' ------------------------------ '
echo '|  CUSTOM BUILD SCRIPTS - END  |'
echo ' ------------------------------ '
echo
