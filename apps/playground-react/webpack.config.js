const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`
    config.devServer = {
        ...config.devServer,
        headers: {
            'Content-Security-Policy-Report-Only': `default-src 'self' cdn.omgeving.vlaanderen.be; report-uri /csp-report;`,
        },
    };

    return config;
});
