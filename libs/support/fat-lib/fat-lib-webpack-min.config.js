const { composePlugins, withNx } = require('@nrwl/webpack');
const { resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = composePlugins(withNx(), (config, { options, context }) => {
    // console.log('fat-lib-webpack-min.config.js - config', config);
    return {
        ...config,
        entry: 'libs/support/fat-lib/fat-lib-index.ts',
        mode: 'production',
        output: {
            ...config.output,
            path: resolve('./dist/fat-lib'),
            filename: 'domg-wc.min.js',
        },
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
