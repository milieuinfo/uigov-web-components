#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: build-apps-and-libs.sh'
cd uigov-web-components

echo "npm install - no 'ci' to avoid the clean"
npm install --save-exact > /dev/null
if [ $? -eq 0 ]
  then
    echo "npm install - success"
  else
    echo "npm install - error"
fi

echo 'BUILDING'
echo "build storybook"
npx nx build-storybook storybook > /dev/null
if [ $? -eq 0 ]
  then
    echo "build storybook - success"
  else
    echo "build storybook - error"
fi

echo "build playground-legacy"
npx nx build playground-legacy > /dev/null
if [ $? -eq 0 ]
  then
    echo "build playground-legacy - success"
  else
    echo "build playground-legacy - error"
fi

echo "build playground-lit"
npx nx build playground-lit > /dev/null
if [ $? -eq 0 ]
  then
    echo "build playground-lit - success"
  else
    echo "build playground-lit - error"
fi

echo "build playground-native"
npx nx build playground-native > /dev/null
if [ $? -eq 0 ]
  then
    echo "build playground-native - success"
  else
    echo "build playground-native - error"
fi

echo "build playground-react"
npx nx build playground-react > /dev/null
if [ $? -eq 0 ]
  then
    echo "build playground-react - success"
  else
    echo "build playground-react - error"
fi

echo "build libraries"
npm run build:all > /dev/null
if [ $? -eq 0 ]
  then
    echo "build libraries - success"
  else
    echo "build libraries - error"
fi

echo "build fat-lib"
npm run build-fat-lib > /dev/null
if [ $? -eq 0 ]
  then
    echo "build fat-lib - success"
  else
    echo "build fat-lib - error"
fi
