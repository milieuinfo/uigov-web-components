#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: build-apps-and-libs.sh'
cd uigov-web-components

echo "npm install - no 'ci' to avoid the clean"
npm install --save-exact  &> /dev/null
if [ $? -eq 0 ]
  then
    echo "npm install - success"
  else
    echo "npm install - error" >&2
fi

echo 'BUILDING'
echo "build storybook"
npx nx build-storybook storybook
echo "build playground-legacy"
npx nx build playground-legacy
echo "build playground-lit"
npx nx build playground-lit
echo "build playground-native"
npx nx build playground-native
echo "build playground-react"
npx nx build playground-react
echo "build libraries"
npm run build:all
echo "build fat-lib"
npm run build-fat-lib
