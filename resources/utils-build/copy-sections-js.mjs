#!/usr/bin/env node

import { copyFiles } from './file-processors.mjs';

copyFiles('build/tsc/lib-sections/sections/src', 'build/dist/libs/sections', '');
copyFiles('libs/sections/src', 'build/dist/libs/sections', '.js');
copyFiles('libs/sections', 'build/dist/libs/sections', 'package.json');
copyFiles('libs/sections', 'build/dist/libs/sections', '.web-types.json');
