import { defineConfig } from 'cypress';

export default defineConfig({
    fileServerFolder: '.',
    fixturesFolder: './src/fixtures',
    modifyObstructiveCode: false,
    video: true,
    videosFolder: '../../dist/cypress/apps/playground-native-e2e/videos',
    screenshotsFolder: '../../dist/cypress/apps/playground-native-e2e/screenshots',
    chromeWebSecurity: false,
    retries: 3,
    e2e: {
        specPattern: './src/e2e/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: './src/support/e2e.ts',
    },
    experimentalCspAllowList: ['default-src'],
});
