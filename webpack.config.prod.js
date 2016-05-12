
var path = require('path');
var webpack = require('webpack');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'angular-baidu-map.min.js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?presets[]=es2015',
                exclude: /(node_modules)/
            }
        ]
    },
    externals: {
        angular: 'angular'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new UnminifiedWebpackPlugin()
    ]
};
