const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const Sass = require('sass');

const scssLoader = {
    test: /\.scss$/,
    exclude: /\/libs\/(components|map|sections)\/src\/lib/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
};

const tsconfigPathsPlugin = new TsconfigPathsPlugin({
    configFile: './apps/storybook/tsconfig.json',
    extensions: ['.ts', '.tsx', '.js'],
});

const litCssLoaderRule = {
    test: /\.scss$/,
    loader: 'lit-css-loader',
    include: /\/libs\/(components|map|sections)\/src\/lib/,
    options: {
        specifier: 'lit',
        transform: (data, { filePath }) => {
            // console.log('lit-css-loader - before', filePath, data);
            // renderSync is deprecated en zou compile moeten worden, maar dat geeft een fout
            const result = Sass.renderSync({
                data,
                file: filePath,
                includePaths: ['./node_modules'],
            }).css.toString();
            // console.log('lit-css-loader - after', result);
            return result;
        },
    },
};

const fixRulesForLit = (rules) => {
    rules.forEach((rule) => {
        if (Array.isArray(rule?.use)) {
            rule.use.forEach((ruleUse) => {
                if (Array.isArray(ruleUse?.options?.plugins)) {
                    ruleUse.options.plugins.forEach((plugin) => {
                        if (Array.isArray(plugin) && plugin[0].includes('plugin-proposal-decorators')) {
                            plugin[1].experimentalDecorators = true;
                            plugin[1].useDefineForClassFields = false;
                        }
                    });
                }
            });
        }
    });
    console.log('fixRulesForLit: plugin-proposal-decorators -> experimentalDecorators && !useDefineForClassFields');
    return rules;
};

module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: [
        '../docs/**/*.stories.mdx',
        '../../../libs/components/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
        '../../../libs/elements/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
        '../../../libs/map/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
        '../../../libs/sections/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    // staticDirs: ['../../../'], TODO: dit geeft problemen bij een storybook-build -> logisch zou de complete root naar een lager path kopieren !!!
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-mock'],
    framework: '@storybook/web-components',
    webpackFinal: async (config) => {
        config.module.rules = fixRulesForLit(config.module.rules);
        config.module.rules = [...config.module.rules, scssLoader, litCssLoaderRule];
        config.resolve.plugins = [tsconfigPathsPlugin];
        // console.log('>>>>>>>>>>>>');
        // console.log('webpackFinal', JSON.stringify(config.module.rules));
        // console.log('<<<<<<<<<<<<');
        return config;
    },
};
