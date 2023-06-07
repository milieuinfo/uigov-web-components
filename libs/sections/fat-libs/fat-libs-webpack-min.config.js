const { composePlugins, withNx } = require('@nrwl/webpack');
const { resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = composePlugins(withNx(), (config, { options, context }) => {
    // console.log('fat-libs-webpack-min.config.js - config', config);
    return {
        ...config,
        entry: 'libs/sections/fat-libs/fat-libs-index.ts',
        mode: 'production',
        output: {
            ...config.output,
            path: resolve('./dist/fat-libs/sections/lib'),
            filename: 'domg-wc-sections.min.js',
        },
        // externals: [/^tinymce/, /^prettier/],
        optimization: {
            ...config.optimization,
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                    terserOptions: {
                        format: {
                            comments: false,
                        },
                    },
                }),
            ],
        },
    };
});
