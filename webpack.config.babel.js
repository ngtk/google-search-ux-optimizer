const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const _src = 'src'
const _dist = 'dist'
const _stylesheets = 'stylesheets'
const _static = 'static'

module.exports = {
  entry: {
    app: `./${_src}/main.js`,
    vendor: []
  },
  output: {
    path: path.resolve(__dirname, `./${_dist}`),
    publicPath: `/${_dist}/`,
    filename: 'js/[name].js'
  },
  resolveLoader: {
    root: [path.join(__dirname, 'node_modules')]
  },
  resolve: {
    root: path.join(__dirname, `${_src}`),
    extensions: ['', '.js' , '.scss' , '.vue']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.pug$/,
        loader: 'pug'
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: `file?name=${_static}/[name].[ext]`
      },
      {
        test: /\.(svg|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: `file?name=${_static}/[name].[ext]`
      },
      {
        test: /\.woff(\d+)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: `file?name=${_static}/[name].[ext]`
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(`${_stylesheets}/[name].css`)
  ],
  devtool: '#source-map'
}
