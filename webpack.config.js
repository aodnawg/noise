const webpack = require('webpack');
const path = require('path');

module.exports = [{
  entry: './src/js/index.js',
  output:
    { filename: 'noise.js',
      path: path.join(__dirname, 'dist') },
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
},

{
  entry: './src/js/index.js',
  output:
    { filename: 'noise.js',
      path: path.join(__dirname, 'dist') },
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
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ compress: { screw_ie8: true, warnings: false } })
  ],
}];
