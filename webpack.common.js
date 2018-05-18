const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');
const PrettierWebpackPlugin = require('prettier-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.tsx',
        vendor: ['react', 'react-router', 'lodash', 'rxjs'],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'react-webpack-starter',
            inject: 'body',
        }),
        new HtmlWebpackRootPlugin('app'),
        new webpack.NamedModulesPlugin(
            chunk =>
                chunk.name
                    ? chunk.name
                    : chunk.modules.map(m => path.relative(m.context, m.request)).join('_'),
        ),
        //new PrettierWebpackPlugin(require('./prettier.config')),
    ],
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    output: {
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[chunkhash].chunk.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    minChunks: Infinity,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
        runtimeChunk: {
            name: entrypoint => `runtimechunk~${entrypoint.name}`,
        },
    },
    module: {
        rules: [
            {
                parser: {
                    requireEnsure: false,
                },
            },
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[hash:base64:5]',
                            camelCase: true,
                            sourceMap: true,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            parser: 'postcss-scss', // sugarss
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                require('autoprefixer')({
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
        ],
    },
};
