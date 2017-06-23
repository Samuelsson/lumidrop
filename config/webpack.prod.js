'use strict';

process.env.NODE_ENV = 'production';

const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.common');

// base.devtool = 'source-map';
//
// base.output = {
//     path: path.resolve(__dirname, '../dist'),
//     publicPath: '',
//     filename: 'bundle.js'
// };
//
// base.plugins.push(
//     // UglifyJS is broken ATM :(
//     // new webpack.optimize.UglifyJsPlugin({
//     //     sourceMap: true,
//     //     compress: {
//     //         warnings: false
//     //     },
//     //     output: {
//     //         comments: false
//     //     },
//     //     m
//     // })
// );

module.exports = base;