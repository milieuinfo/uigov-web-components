#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: build-apps-and-libs.sh'
cd uigov-web-components
echo "npm install - no 'ci' to avoid the clean"
npm install --save-exact
echo 'BUILDING'
echo "build apps"
npx nx build
echo "build libraries"
npm run build:all
echo "build fat sections"
npm run build-fat-libs:sections
