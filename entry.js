const fs = require('fs') // 文件
const path = require('path')

const files = fs.readdirSync(path.join(__dirname, './src/containers/'))
let entry = {}
files.forEach(key => {
  entry[key] = path.join(__dirname, 'src/containers/' + key + '/index.js')
})

module.exports = entry