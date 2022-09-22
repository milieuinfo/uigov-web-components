const Sass = require('sass');

const litCssLoaderRule = {
    test: /\.scss$/,
    loader: 'lit-css-loader',
    include: /\/libs\/components\/src\/lib/,
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

module.exports = (config, context) => {
    // de bestaande rule vinden die de .scss verwerkt
    const scssRule = config.module.rules.find((rule) => rule.test.toString().includes('.scss'));
    // die scssRule uitbreiden met een exclude, de scss wordt door de litCssLoaderRule verwerkt
    scssRule.exclude = /\/libs\/components\/src\/lib/;
    // de litCssLoaderRule toevoegen aan de rules
    config.module.rules = [...config.module.rules, litCssLoaderRule];
    // console.log('custom-webpack.config.js - config', config.module.rules);
    return config;
};
