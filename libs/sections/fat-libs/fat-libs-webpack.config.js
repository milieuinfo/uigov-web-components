const { composePlugins, withNx } = require('@nrwl/webpack');
const { resolve } = require('path');

module.exports = composePlugins(withNx(), (config, { options, context }) => {
    // console.log('fat-libs-webpack.config.js - config', config);
    return {
        ...config,
        entry: 'libs/sections/fat-libs/fat-libs-index.ts',
        mode: 'production',
        output: {
            ...config.output,
            path: resolve('./dist/fat-libs/sections'),
            filename: 'domg-wc-sections.js',
        },
        // externals: [/^tinymce/, /^prettier/],
    };
});
