import { defineConfig } from 'cypress';
import path from 'path';

export default defineConfig({
    screenshotsFolder: './dist/cypress/screenshots',
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
                        '@domg-wc/common-utilities': path.resolve(__dirname, 'libs/common/utilities/src/'),
                        '@domg-wc/components': path.resolve(__dirname, 'libs/components/src/'),
                        '@domg-wc/elements': path.resolve(__dirname, 'libs/elements/src/'),
                        '@domg-wc/form': path.resolve(__dirname, 'libs/form/src/'),
                        '@domg-wc/map': path.resolve(__dirname, 'libs/map/src/'),
                        '@domg-wc/sections': path.resolve(__dirname, 'libs/sections/src/'),
                        '@domg-wc/qlik': path.resolve(__dirname, 'libs/qlik/src/'),
                    },
                },
            },
        },
    },
});
