#!/usr/bin/env node

import { copyFiles } from './file-processors.mjs';

copyFiles('build/tsc/lib-map/map/src', 'dist/dist/libs/map', '');
copyFiles('libs/map/src', 'dist/dist/libs/map', '.js');
copyFiles('libs/map', 'dist/dist/libs/map', 'package.json');
copyFiles('libs/map', 'dist/dist/libs/map', '.web-types.json');
