'use strict';

process.env.NODE_ENV = 'testing';

const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.config.base');

module.exports = base;