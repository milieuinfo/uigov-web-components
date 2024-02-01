#!/bin/bash

# exit on error
set -e

echo
echo ' ------------------------------ '
echo '| CUSTOM BUILD SCRIPTS - START |'
echo ' ------------------------------ '
echo

echo 'RUNNING SCRIPT: unit-wct-component-playground-tests-docker.sh'
export BUILD_SCRIPT=uigov-web-components/resources/ci/scripts/unit-wct-component-playground-tests.sh
cd resources/ci
echo "docker-compose run build"
docker-compose run build 2> buffer-stderr.txt 1> buffer-stdout.txt
if [ $? -eq 0 ]
  then
    echo "docker-compose run build - success"
  else
    echo "docker-compose run build - error - buffer-stderr.txt" >&2
    cat buffer-stderr.txt>&2
    sleep 2
fi

echo
echo ' ------------------------------ '
echo '|  CUSTOM BUILD SCRIPTS - END  |'
echo ' ------------------------------ '
echo
