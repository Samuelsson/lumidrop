'use strict';

process.env.NODE_ENV = 'testing';

const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.common');

const root = path.resolve(__dirname, '..');

base.devtool = 'inline-source-map';

base.module.rules.push(
    {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: /node_modules/
    }
);

base.plugins.push(
    // This was needed to get rid of console warnings. Angular issue#11580
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        path.resolve(__dirname, '../src')
    )
);

module.exports = base;