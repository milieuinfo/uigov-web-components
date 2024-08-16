#!/usr/bin/env node

import { copyFiles } from './file-processors.mjs';

copyFiles('build/tsc/lib-common-storybook', 'build/dist/libs/common-storybook', '');
copyFiles('libs/common/storybook/src', 'build/dist/libs/common-storybook', '.js');
copyFiles('libs/common/storybook', 'build/dist/libs/common-storybook', 'package.json');
copyFiles('libs/common/storybook', 'build/dist/libs/common-storybook', '.web-types.json');
