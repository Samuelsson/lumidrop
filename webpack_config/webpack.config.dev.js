'use strict';

process.env.NODE_ENV = 'development';

const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.config.base');

base.devtool = 'cheap-eval-source-map';

base.output = {
    publicPath: '/',
    filename: 'bundle.js'
};

base.module.rules.push(
    {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
    }
);

base.plugins.push(
    new webpack.HotModuleReplacementPlugin()
);

base.devServer = {
    contentBase: path.resolve(__dirname, '../src'),
    stats: 'minimal',
    hot: true
};

module.exports = base;