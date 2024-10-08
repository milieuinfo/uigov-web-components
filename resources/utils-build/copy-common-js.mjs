#!/usr/bin/env node

import { copyFiles } from './file-processors.mjs';

copyFiles('build/tsc/lib-common', 'build/dist/libs/common', '');
copyFiles('libs/common/src', 'build/dist/libs/common', '.js');
copyFiles('libs/common', 'build/dist/libs/common', 'package.json');
