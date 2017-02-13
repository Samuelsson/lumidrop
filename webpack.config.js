var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;
var isProd = ENV === 'build';
var isDev = ENV === 'dev';
var isTest = ENV === 'test';

module.exports = function makeWebpackConfig () {
    var config = {};

    if (isProd) {
        config.devtool = 'source-map';
    } else {
        config.devtool = 'cheap-eval-source-map';
    }

    config.entry = ['./src/app/app.js'];

    if (isDev) {
        config.entry.push(
            'webpack-dev-server/client?http://0.0.0.0:8080',
            'webpack/hot/dev-server'
        );
    }

    config.output = {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js'
    };

    config.module = {
        preLoaders: [{
                test: /\.js$/,
                loader: 'eslint',
                exclude: /node_modules/
        }],
        loaders: [{
                test: /\.js$/,
                loader: 'ng-annotate!babel',
                exclude: /node_modules/
            }, {
                test: /\.html$/,
                loader: 'html',
                exclude: /index\.html/
            }, {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file'
            }, {
                test: /\.(s?[ac]ss)$/,
                loader: 'style!css!sass'
            }]
    };

    config.plugins = [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        })
    ];

    if (isProd) {
        config.plugins.push(
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compressor: {
                    warnings: false,
                }
            })
        );
    } else {
        config.plugins.push(
            new webpack.HotModuleReplacementPlugin()
        )
    }

    if (isDev) {
        config.devServer = {
            contentBase: './dist',
            stats: 'minimal',
            hot: true
        };
    }

    return config;
}();