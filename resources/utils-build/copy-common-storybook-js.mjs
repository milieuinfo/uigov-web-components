#!/usr/bin/env node

import { copyFiles } from './file-processors.mjs';

copyFiles('build/tsc/lib-common-storybook', 'dist/dist/libs/common-storybook', '');
copyFiles('libs/common/storybook/src', 'dist/dist/libs/common-storybook', '.js');
copyFiles('libs/common/storybook', 'dist/dist/libs/common-storybook', 'package.json');
copyFiles('libs/common/storybook', 'dist/dist/libs/common-storybook', '.web-types.json');
