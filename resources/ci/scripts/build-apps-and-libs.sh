#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: build-apps-and-libs.sh'
cd uigov-web-components

echo "npm install - no 'ci' to avoid the clean"
npm install --save-exact 2> error-buffer.txt 1> output-buffer.txt
if [ $? -eq 0 ]
  then
    echo "npm install - success"
  else
    echo "npm install - error - ERROR-BUFFER" >&2
    cat error-buffer.txt >&2
    sleep 2
fi

echo 'BUILDING'
echo "build storybook"
npx nx build-storybook storybook 2> error-buffer.txt 1> output-buffer.txt
if [ $? -eq 0 ]
  then
    echo "build storybook - success"
  else
    echo "build storybook - error - ERROR-BUFFER" >&2
    cat error-buffer.txt >&2
    sleep 2
fi

echo "build playground-legacy"
npx nx build playground-legacy 2> error-buffer.txt 1> output-buffer.txt
if [ $? -eq 0 ]
  then
    echo "build playground-legacy - success"
  else
    echo "build playground-legacy - error - ERROR-BUFFER" >&2
    cat error-buffer.txt >&2
    sleep 2
fi

echo "build playground-lit"
npx nx build playground-lit 2> error-buffer.txt 1> output-buffer.txt
if [ $? -eq 0 ]
  then
    echo "build playground-lit - success"
  else
    echo "build playground-lit - error - ERROR-BUFFER" >&2
    cat error-buffer.txt >&2
    sleep 2
fi

echo "build playground-native"
npx nx build playground-native 2> error-buffer.txt 1> output-buffer.txt
if [ $? -eq 0 ]
  then
    echo "build playground-native - success"
  else
    echo "build playground-native - error - ERROR-BUFFER" >&2
    cat error-buffer.txt >&2
    sleep 2
fi

echo "build playground-react"
npx nx build playground-react 2> error-buffer.txt 1> output-buffer.txt
if [ $? -eq 0 ]
  then
    echo "build playground-react - success"
  else
    echo "build playground-react - error - ERROR-BUFFER" >&2
    cat error-buffer.txt >&2
    sleep 2
fi

echo "build libraries"
npm run build:all 2> error-buffer.txt 1> output-buffer.txt
if [ $? -eq 0 ]
  then
    echo "build libraries - success"
  else
    echo "build libraries - error - ERROR-BUFFER" >&2
    cat error-buffer.txt >&2
    sleep 2
fi

echo "build fat-lib"
npm run build-fat-lib 2> error-buffer.txt 1> output-buffer.txt
if [ $? -eq 0 ]
  then
    echo "build fat-lib - success"
  else
    echo "build fat-lib - error - ERROR-BUFFER" >&2
    cat error-buffer.txt >&2
    sleep 2
fi
