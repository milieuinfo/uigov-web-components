#!/bin/bash

# exit on error
set -e

# to the folder to generate
cd ../generate-icons

# generate the web-types
tsx generate-icon-files.ts

# back to the initial folder
cd ../bash-scripts
