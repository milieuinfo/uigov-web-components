#!/usr/bin/env node

import { copyFiles } from './file-processors.mjs';

// onderstaande is een workaround: als je bvb. build-with-js op de map gebruikt dan build hij ook opnieuw
// zijn peer-dependencies - waardoor die .js bestanden verwijderd worden
copyFiles('libs/common/utilities/src', 'dist/libs/common/utilities', '.js');
copyFiles('libs/form/src', 'dist/libs/form', '.js');
copyFiles('libs/form', 'dist/libs/form', '.web-types.json');
