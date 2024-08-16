#!/usr/bin/env node

import { copyFiles } from './file-processors.mjs';

copyFiles('build/tsc/lib-elements/elements/src', 'dist/dist/libs/elements', '');
copyFiles('libs/elements/src', 'dist/dist/libs/elements', '.js');
copyFiles('libs/elements', 'dist/dist/libs/elements', 'package.json');
copyFiles('libs/elements', 'dist/dist/libs/elements', '.web-types.json');
