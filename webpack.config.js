const path = require('path') // 路径
const entry = require('./entry')
const page = require('./page')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.js/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env']
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /.css/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ].concat(page),
  devServer: {
    host: '0.0.0.0',
    port: '2019',
    hot: true
  }
}