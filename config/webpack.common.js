'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;

const root = path.resolve(__dirname, '..');

module.exports = {
    entry: {
        app: [ path.resolve(root, 'src', 'main') ],
        vendor: [ path.resolve(root, 'src', 'vendor') ]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }, {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: /index\.html/
            }, {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            }, {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new ChunkWebpack({
            filename: 'vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(root, 'src', 'index.html'),
            hash: true
        })
    ],

    resolve: {
        extensions: [ '.js', '.ts' ]
    }
};