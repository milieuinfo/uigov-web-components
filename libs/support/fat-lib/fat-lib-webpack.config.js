const { composePlugins, withNx } = require('@nrwl/webpack');
const { resolve } = require('path');

module.exports = composePlugins(withNx(), (config, { options, context }) => {
    // console.log('fat-lib-webpack.config.js - config', config);
    return {
        ...config,
        entry: 'libs/support/fat-lib/fat-lib-index.ts',
        mode: 'production',
        output: {
            ...config.output,
            path: resolve('./dist/fat-lib'),
            filename: 'domg-wc.js',
        },
    };
});
