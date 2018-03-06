
const {resolve} = require('path');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        index: resolve(__dirname, 'src', 'index.js')
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'angular-baidu-map.min.js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
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
            }
        ]
    },
    externals: {
        angular: 'angular'
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new NgAnnotatePlugin({
            add: true
        }),
        new UnminifiedWebpackPlugin()
    ]
};
