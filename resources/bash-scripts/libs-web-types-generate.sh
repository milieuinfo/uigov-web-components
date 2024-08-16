#!/bin/bash

# exit on error
set -e

# to the folder to generate
cd ../generate-web-types

# generate the web-types
tsx web-types.generator.ts

# back to the initial folder
cd ../bash-scripts
