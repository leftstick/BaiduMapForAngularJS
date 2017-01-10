
const {resolve} = require('path');
const webpack = require('webpack');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    entry: {
        index: resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'angular-baidu-map.min.js',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel?{"presets":["es2015"], "plugins": ["transform-object-rest-spread"]}',
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