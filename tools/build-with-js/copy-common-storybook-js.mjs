#!/usr/bin/env node

import { copyFiles } from './file-processors.mjs';

// onderstaande is een workaround: als je een docker container bvb. build-with-js op de map gebruikt
// dan build hij ook opnieuw zijn peer-dependencies - waardoor die .js bestanden verwijderd worden
copyFiles('libs/common/storybook/src', 'dist/libs/common/storybook', '.js');
