#!/usr/bin/env node

import { copyFiles } from './file-processors.mjs';

copyFiles('build/tsc/lib-sections/sections/src', 'dist/dist/libs/sections', '');
copyFiles('libs/sections/src', 'dist/dist/libs/sections', '.js');
copyFiles('libs/sections', 'dist/dist/libs/sections', 'package.json');
copyFiles('libs/sections', 'dist/dist/libs/sections', '.web-types.json');
