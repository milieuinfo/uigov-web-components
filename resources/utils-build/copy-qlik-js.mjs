#!/usr/bin/env node

import { copyFiles } from './file-processors.mjs';

copyFiles('build/tsc/lib-qlik/qlik/src', 'dist/dist/libs/qlik', '');
copyFiles('libs/qlik/src', 'dist/dist/libs/qlik', '.js');
copyFiles('libs/qlik', 'dist/dist/libs/qlik', 'package.json');
copyFiles('libs/qlik', 'dist/dist/libs/qlik', '.web-types.json');
