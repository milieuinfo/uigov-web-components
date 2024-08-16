const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config = {
    mode: 'development',
    entry: './src/main.tsx',
    devServer: {
        static: {
            directory: path.resolve(__dirname, '../../dist/dist/apps/playground-react'),
            publicPath: '/',
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: './tsconfig.json',
            }),
        ],
    },
    output: {
        clean: true,
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '../../dist/dist/apps/playground-react'),
        hashFunction: 'sha256',
        publicPath: '/',
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },
    performance: {
        maxAssetSize: 10 * 1024 * 1024,
        maxEntrypointSize: 10 * 1024 * 1024,
        hints: 'warning',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],
};

module.exports = (env, argv) => {
    if (argv?.mode === 'development') {
    }
    if (argv?.mode === 'production') {
        config.devtool = 'source-map';
    }
    return config;
};
