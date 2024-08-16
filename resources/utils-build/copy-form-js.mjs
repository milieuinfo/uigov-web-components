#!/usr/bin/env node

import { copyFiles } from './file-processors.mjs';

copyFiles('build/tsc/lib-form/form/src', 'dist/dist/libs/form', '');
copyFiles('libs/form/src', 'dist/dist/libs/form', '.js');
copyFiles('libs/form', 'dist/dist/libs/form', 'package.json');
copyFiles('libs/form', 'dist/dist/libs/form', '.web-types.json');
