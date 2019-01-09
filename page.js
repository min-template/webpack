const fs = require('fs') // 文件
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const files = fs.readdirSync(path.join(__dirname, './src/containers/'))
let page = []
files.forEach(key => {
  page.push(new HtmlWebpackPlugin({
    template: path.join(__dirname, '/index.html'),
    filename: `${key}.html`,
    chunks: [`${key}`]
  }))
})

module.exports = page