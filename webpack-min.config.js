
var webpack = require('webpack');

module.exports = {
  entry: './client.js',
  output: {
    path: __dirname + '/dist',
    filename: 'geomicons.min.js',
    library: 'Geomicons'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};

