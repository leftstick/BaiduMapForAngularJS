const {resolve} = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const postcssVars = require('postcss-simple-vars');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: resolve(__dirname, 'demo', 'js', 'index.js')
    },
    output: {
        path: resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        publicPath: '/'
    },
    debug: true,
    devtool: '#eval',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css!postcss!'
            },
            {
                test: /\.(js|co)$/,
                loader: 'ng-annotate!babel?{"presets":["es2015"], "plugins": ["transform-object-rest-spread"]}',
                exclude: /(node_modules)/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,
                loader: 'file'
            }
        ]
    },
    postcss: function() {
        return [
            autoprefixer({
                browsers: ['last 5 versions']
            }),
            postcssVars()
        ];
    },
    resolve: {
        root: [
            resolve(__dirname, 'demo'),
            resolve(__dirname, 'demo', 'js')
        ],
        extensions: [
            '',
            '.js',
            '.co'
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.bundle.js'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: resolve(__dirname, 'demo', 'index.html'),
            favicon: resolve(__dirname, 'demo', 'img', 'favicon.ico'),
            hash: false
        })
    ]
};