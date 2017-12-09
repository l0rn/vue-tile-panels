/* globals require __dirname module */

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssExtractor = new ExtractTextPlugin('[name].css')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BASE_PATH = __dirname
const ENV = process.env.NODE_ENV || 'development'
const PRODUCTION = ENV === 'production'


const baseConfig = {
  entry: {
    'vue2-tile-panels': path.resolve(BASE_PATH, 'src', 'index.js'),
  },
  output: {
    path: path.resolve(BASE_PATH, 'dist'),
    filename: PRODUCTION ? '[name].min.js' : '[name].js',
    library: 'vue-tile-panels',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ],
      },
      {
        test: /\.styl/,
        use: cssExtractor.extract(['css-loader', 'stylus-loader'])
      },
      {
        test: /\.pug$/,
        loaders: ['html-loader', 'pug-html-loader']
      }
    ]
  },
  plugins: [
    cssExtractor,
    new HtmlWebpackPlugin({
      title: 'Vue2 Tile Panel Example',
      inject: 'head',
      template: 'index.html'
})
  ],
  externals: {
    vue: 'vue',
  }
}

const productionConfig = {
  devtool: false,
  plugins: [
    ...baseConfig.plugins,
    new UglifyJSPlugin()
  ]
}

const config = PRODUCTION ? Object.assign({}, baseConfig, productionConfig) : baseConfig

module.exports = config