const path = require('path');

const {
  rootPath,
  distPath,
} = require('./paths.js');

const config = {
  entry: {
    main: './src/index.ts',
  },
  output: {
    filename: 'bundle.js',
    path: distPath,
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [
      path.resolve(rootPath, '.'),
      path.resolve(rootPath, 'node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /^node_modules$/,
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /^node_modules$/,
      },
    ],
  },
};

module.exports = config;
