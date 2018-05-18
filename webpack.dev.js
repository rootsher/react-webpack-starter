const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    performance: {
        hints: 'warning',
        maxEntrypointSize: 400000,
        maxAssetSize: 100000,
    },
    stats: 'errors-only',
});
