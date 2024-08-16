#!/usr/bin/env node

import { copyFiles } from './file-processors.mjs';

copyFiles('build/tsc/lib-components/components/src', 'dist/dist/libs/components', '');
copyFiles('libs/components/src', 'dist/dist/libs/components', '.js');
copyFiles('libs/components', 'dist/dist/libs/components', 'package.json');
copyFiles('libs/components', 'dist/dist/libs/components', '.web-types.json');
