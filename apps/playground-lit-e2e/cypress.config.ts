import { defineConfig } from 'cypress';

export default defineConfig({
    fileServerFolder: '.',
    fixturesFolder: './src/fixtures',
    modifyObstructiveCode: false,
    video: true,
    videosFolder: '../../dist/cypress/apps/playground-lit-e2e/videos',
    screenshotsFolder: '../../dist/cypress/apps/playground-lit-e2e/screenshots',
    chromeWebSecurity: false,
    reporter: '../../node_modules/cypress-multi-reporters',
    reporterOptions: {
        configFile: 'reporter-config.json',
    },
    retries: 3,
    e2e: {
        setupNodeEvents(on, config) {},
        specPattern: './src/e2e/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: './src/support/e2e.ts',
    },
    experimentalCspAllowList: ['default-src'],
});
