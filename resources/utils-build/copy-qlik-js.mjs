#!/usr/bin/env node

import { copyFiles } from './file-processors.mjs';

copyFiles('build/tsc/lib-qlik/qlik/src', 'build/dist/libs/qlik', '');
copyFiles('libs/qlik/src', 'build/dist/libs/qlik', '.js');
copyFiles('libs/qlik', 'build/dist/libs/qlik', 'package.json');
copyFiles('libs/qlik', 'build/dist/libs/qlik', '.web-types.json');
