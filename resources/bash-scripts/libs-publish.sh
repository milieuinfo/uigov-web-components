#!/bin/bash

# exit on error
set -e

# to the folder to publish
cd ../../dist/dist/libs

if [ "$1" ]; then
    RELEASE_VERSION=$1
else
echo "[FOUT] - geen argument meegegeven dat de RELEASE_VERSION specifieert"
    exit 1;
fi

cd ./common-utilities
npm publish domg-wc-common-utilities-${RELEASE_VERSION}.tgz
echo "[done] - publish - @domg-wc/common-utilities-${RELEASE_VERSION}"

cd ../common-storybook
npm publish domg-wc-common-storybook-${RELEASE_VERSION}.tgz
echo "[done] - publish - @domg-wc/common-storybook"

cd ../elements
npm publish domg-wc-elements-${RELEASE_VERSION}.tgz
echo "[done] - publish - @domg-wc/elements-${RELEASE_VERSION}"

cd ../components
npm publish domg-wc-components-${RELEASE_VERSION}.tgz
echo "[done] - publish - @domg-wc/components-${RELEASE_VERSION}"

cd ../form
npm publish domg-wc-form-${RELEASE_VERSION}.tgz
echo "[done] - publish - @domg-wc/form-${RELEASE_VERSION}"

cd ../sections
npm publish domg-wc-sections-${RELEASE_VERSION}.tgz
echo "[done] - publish - @domg-wc/sections-${RELEASE_VERSION}"

cd ../map
npm publish domg-wc-map-${RELEASE_VERSION}.tgz
echo "[done] - publish - @domg-wc/map-${RELEASE_VERSION}"

cd ../qlik
npm publish domg-wc-qlik-${RELEASE_VERSION}.tgz
echo "[done] - publish - @domg-wc/qlik-${RELEASE_VERSION}"

# back to the initial folder
cd ../resources/bash-scripts
