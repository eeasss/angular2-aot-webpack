'use strict';
let path = require('path');
let ngtools = require('@ngtools/webpack');

module.exports = {
  entry: require('./webpack/entry'),

  context: path.join(process.cwd(), 'src'),

  output: require('./webpack/output'),

  module: require('./webpack/module'),

  plugins: require('./webpack/plugins').concat([
    new ngtools.AotPlugin({
      tsConfigPath: './tsconfig.aot.json',
      baseDir: process.cwd(),
      entryModule: path.join(process.cwd(), 'src', 'app', 'main') + '#MainModule'
    })
  ]),

  resolve: require('./webpack/resolve'),

  devServer: require('./webpack/dev-server'),

  stats: 'errors-only',

  devtool: 'source-map'
};
