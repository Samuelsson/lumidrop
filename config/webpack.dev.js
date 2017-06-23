'use strict';

process.env.NODE_ENV = 'development';

const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.common');

const root = path.resolve(__dirname, '..');

base.devtool = 'cheap-eval-source-map';

base.output = {
    filename: '[name].bundle.js',
    path: path.resolve(root, 'dist')
};

base.module.rules.push(
    {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: /node_modules/
    }
);

base.devServer = {
    contentBase: path.resolve(root, 'dist'),
    port: 9000,
    stats: 'minimal'
};

module.exports = base;