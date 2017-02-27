'use strict';

process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const base = require('./webpack.config.base');

base.devtool = 'cheap-eval-source-map';

base.plugins.push(
    new webpack.HotModuleReplacementPlugin()
);

base.devServer = {
    contentBase: './dist',
    stats: 'minimal',
    hot: true
};

module.exports = base;