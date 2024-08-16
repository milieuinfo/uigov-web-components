#!/usr/bin/env node

import { copyFiles } from './file-processors.mjs';

copyFiles('build/tsc/lib-elements/elements/src', 'build/dist/libs/elements', '');
copyFiles('libs/elements/src', 'build/dist/libs/elements', '.js');
copyFiles('libs/elements', 'build/dist/libs/elements', 'package.json');
copyFiles('libs/elements', 'build/dist/libs/elements', '.web-types.json');
