#!/bin/bash

echo "node versie: $(node -v)"
echo "npm versie: $(npm -v)"

git clone -b feature/UIG-2122-setup https://github.com/milieuinfo/uig.git

cd uig/applications

#export CYPRESS_CACHE_FOLDER=$PWD/cypress_cache
echo "npm ci"
npm ci
#echo "npx nx test"
#npx nx test
#echo "npx nx build"
#npx nx build
echo "npx nx e2e alliance-e2e"
npx nx e2e alliance-e2e
