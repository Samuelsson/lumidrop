'use strict';

process.env.NODE_ENV = 'prod';

const webpack = require('webpack');
const base = require('./webpack.config.base');

base.devtool = 'source-map';

base.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
            warnings: false
        },
        output: {
            comments: false
        }
    })
);

module.exports = base;