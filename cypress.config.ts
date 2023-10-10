import { defineConfig } from 'cypress';
import path from 'path';

export default defineConfig({
    videosFolder: './dist/cypress/videos',
    screenshotsFolder: './dist/cypress/screenshots',
    reporter: './node_modules/cypress-multi-reporters',
    reporterOptions: {
        configFile: 'reporter-config.json',
    },
    retries: 3,
    component: {
        specPattern: './libs/**/*.cy.{js,jsx,ts,tsx}',
        // @ts-ignore: Ignoring missing property 'framework'
        devServer: {
            bundler: 'webpack',
            webpackConfig: {
                module: {
                    rules: [
                        {
                            exclude: /(node_modules)/,
                            loader: 'ts-loader',
                            test: /\.[t]sx?$/,
                        },
                    ],
                },
                resolve: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                    alias: {
                        '@domg-wc/common-utilities': path.resolve(__dirname, 'libs/common/utilities/src/index.ts'),
                        '@domg-wc/components': path.resolve(__dirname, 'libs/components/src/index.ts'),
                        '@domg-wc/elements': path.resolve(__dirname, 'libs/elements/src/index.ts'),
                        '@domg-wc/map': path.resolve(__dirname, 'libs/map/src/index.ts'),
                        '@domg-wc/sections': path.resolve(__dirname, 'libs/sections/src/index.ts'),
                    },
                },
            },
        },
    },
});
