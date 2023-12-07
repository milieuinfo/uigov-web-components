import type { StorybookConfig } from '@storybook/web-components-webpack5';
// import { addons } from '@storybook/manager-api';
// import { themes } from '@storybook/theming';

// addons.setConfig({
//     theme: themes.light,
// });

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const tsconfigPathsPlugin = new TsconfigPathsPlugin({
    configFile: './apps/storybook/tsconfig.storybook.json',
    extensions: ['.ts', '.tsx', '.js'],
});

const config: StorybookConfig = {
    stories: [
        '../docs/**/*.stories.mdx',
        '../docs/**/*.stories.@(js|jsx|ts|tsx)',
        '../docs/**/*.stories-doc.mdx',
        '../../../libs/components/src/**/*.stories.@(js|jsx|ts|tsx)',
        '../../../libs/elements/src/**/*.stories.@(js|jsx|ts|tsx)',
        '../../../libs/map/src/**/*.stories.@(js|jsx|ts|tsx)',
        '../../../libs/sections/src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        {
            name: 'storybook-addon-swc',
            options: {
                swcLoaderOptions: {
                    isModule: true,
                    module: {
                        type: 'es6',
                        noInterop: true,
                    },
                    jsc: {
                        target: 'es2022',
                        parser: {
                            syntax: 'typescript',
                            tsx: true,
                            decorators: true,
                            dynamicImport: true,
                        },
                        loose: true,
                    },
                },
            },
        },
    ],
    framework: {
        name: '@storybook/web-components-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
        defaultName: 'documentatie',
    },
    staticDirs: ['../resources/public'],
    async webpackFinal(config, { configType }) {
        if (configType === 'DEVELOPMENT') {
            // Modify config for development
        }
        if (configType === 'PRODUCTION') {
            // Modify config for production
        }
        config.resolve.plugins = [tsconfigPathsPlugin];
        return config;
    },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs

// https://github.com/storybookjs/storybook/issues/21635
