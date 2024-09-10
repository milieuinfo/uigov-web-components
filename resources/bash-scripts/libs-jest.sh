#!/bin/bash

# exit on error
#set -e

# to the root folder
cd ../..

# run this script with: bash ./jest-run.sh

cd ./libs/common/storybook
jest
cd ../../..

cd ./libs/common/utilities
jest
cd ../../..

cd ./libs/components
jest
cd ../..

cd ./libs/elements
jest
cd ../..

cd ./libs/form
jest
cd ../..

cd ./libs/integration
jest
cd ../..

cd ./libs/map
jest
cd ../..

cd ./libs/qlik
jest
cd ../..

cd ./libs/sections
jest
cd ../..

# back to the initial folder
cd ./resources/bash-scripts
