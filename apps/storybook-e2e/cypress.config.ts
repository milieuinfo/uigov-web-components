import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
    fileServerFolder: '.',
    fixturesFolder: './src/fixtures',
    modifyObstructiveCode: false,
    video: true,
    videosFolder: '../../dist/cypress/apps/storybook-e2e/videos',
    screenshotsFolder: '../../dist/cypress/apps/storybook-e2e/screenshots',
    chromeWebSecurity: false,
    reporter: '../../node_modules/cypress-multi-reporters',
    retries: 3,
    e2e: nxE2EPreset(__filename, { cypressDir: 'src' }),
});
