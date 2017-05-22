const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = function(env = {}) {
    const isDemo = !!env.isDemo;
    return {
        entry: {
            index: resolve(__dirname, 'demo', 'js', 'index.js')
        },
        output: {
            path: resolve(__dirname, 'build'),
            filename: (isDemo ? '[hash].' : '') + '[name].bundle.js',
            chunkFilename: (isDemo ? '[hash].' : '') + '[id].bundle.js',
            publicPath: isDemo ? '/BaiduMapForAngularJS/' : '/'
        },
        devtool: isDemo ? '' : '#eval',
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader'
                        }
                    ]
                },
                {
                    test: /\.(js|co)$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    ['es2015', {
                                        modules: false
                                    }]
                                ],
                                plugins: ['transform-object-rest-spread']
                            }
                        }],
                    exclude: /(node_modules)/
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,
                    use: ['file-loader']
                }
            ]
        },
        resolve: {
            modules: [
                resolve(__dirname, 'node_modules'),
                resolve(__dirname, 'demo'),
                resolve(__dirname, 'demo', 'js')
            ],
            extensions: [
                '.js',
                '.co'
            ]
        },
        plugins: (isDemo ? [new NgAnnotatePlugin({
            add: true
        }), new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })] : []).concat([
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: ({resource}) => resource && resource.indexOf('node_modules') >= 0 && resource.match(/\.js$/)
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                inject: 'body',
                template: resolve(__dirname, 'demo', 'index.html'),
                favicon: resolve(__dirname, 'demo', 'img', 'favicon.ico'),
                hash: false
            })
        ])
    }
};
