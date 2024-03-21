import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
    fileServerFolder: '.',
    fixturesFolder: './src/fixtures',
    modifyObstructiveCode: false,
    screenshotsFolder: '../../dist/cypress/apps/storybook-e2e/screenshots',
    chromeWebSecurity: false,
    retries: 3,
    e2e: nxE2EPreset(__filename, { cypressDir: 'src' }),
});
