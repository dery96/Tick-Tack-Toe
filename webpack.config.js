/*
    ./webpack.config.js
*/
const path = require('path');
module.exports = {
  entry: './js/app.js',
  output: {
    path: path.resolve('./js'),
    filename: 'app_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  watch: true
}
