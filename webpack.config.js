const path = require('path');

module.exports = {
  entry: './src/js/index.js',

  output: {
    filename: 'bundle.js',
    path: __dirname
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }],
    }],
  },

  devtool: 'inline-source-map'
};
