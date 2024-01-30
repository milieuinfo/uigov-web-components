#!/bin/bash

# exit on error
set -e

echo 'RUNNING SCRIPT: build-apps-and-libs.sh'
cd uigov-web-components

echo "npm install - no 'ci' to avoid the clean"
npm install --save-exact &> output-buffer.txt
if [ $? -eq 0 ]
  then
    echo "npm install - success"
  else
    echo "npm install - error - OUTPUT OF BUFFER" >&2
    cat output-buffer.txt >&2
    sleep 2
fi

echo 'BUILDING'
echo "build storybook"
npx nx build-storybook storybook &> output-buffer.txt
if [ $? -eq 0 ]
  then
    echo "build storybook - success"
  else
    echo "build storybook - error - OUTPUT OF BUFFER" >&2
    cat output-buffer.txt >&2
    sleep 2
fi

echo "build playground-legacy"
npx nx build playground-legacy &> output-buffer.txt
if [ $? -eq 0 ]
  then
    echo "build playground-legacy - success"
  else
    echo "build playground-legacy - error - OUTPUT OF BUFFER" >&2
    cat output-buffer.txt >&2
    sleep 2
fi

echo "build playground-lit"
npx nx build playground-lit &> output-buffer.txt
if [ $? -eq 0 ]
  then
    echo "build playground-lit - success"
  else
    echo "build playground-lit - error - OUTPUT OF BUFFER" >&2
    cat output-buffer.txt >&2
    sleep 2
fi

echo "build playground-native"
npx nx build playground-native &> output-buffer.txt
if [ $? -eq 0 ]
  then
    echo "build playground-native - success"
  else
    echo "build playground-native - error - OUTPUT OF BUFFER" >&2
    cat output-buffer.txt >&2
    sleep 2
fi

echo "build playground-react"
npx nx build playground-react &> output-buffer.txt
if [ $? -eq 0 ]
  then
    echo "build playground-react - success"
  else
    echo "build playground-react - error - OUTPUT OF BUFFER" >&2
    cat output-buffer.txt >&2
    sleep 2
fi

echo "build libraries"
npm run build:all &> output-buffer.txt
if [ $? -eq 0 ]
  then
    echo "build libraries - success"
  else
    echo "build libraries - error - OUTPUT OF BUFFER" >&2
    cat output-buffer.txt >&2
    sleep 2
fi

echo "build fat-lib"
npm run build-fat-lib &> output-buffer.txt
if [ $? -eq 0 ]
  then
    echo "build fat-lib - success"
  else
    echo "build fat-lib - error - OUTPUT OF BUFFER" >&2
    cat output-buffer.txt >&2
    sleep 2
fi
