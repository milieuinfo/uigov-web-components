import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: { 
        ...nxE2EPreset(__filename, { cypressDir: 'src' }),
        baseUrl: 'http://localhost:4204'
    },
    retries: 3,
    experimentalCspAllowList: ['default-src'],
    screenshotsFolder: '../../dist/cypress/apps/integrator-e2e/screenshots',
});
