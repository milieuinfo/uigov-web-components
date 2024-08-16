#!/usr/bin/env node

import { copyFiles } from './file-processors.mjs';

copyFiles('build/tsc/lib-form/form/src', 'build/dist/libs/form', '');
copyFiles('libs/form/src', 'build/dist/libs/form', '.js');
copyFiles('libs/form', 'build/dist/libs/form', 'package.json');
copyFiles('libs/form', 'build/dist/libs/form', '.web-types.json');
