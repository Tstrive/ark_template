const express = require('express') // 引入express
const fs = require('fs')
const path = require('path')

const app = express() // 实例化express

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

fs.readdirSync(path.join(__dirname, '/module'))
  .filter(function (filename) {
    return filename.slice(-3) === '.js'
  })
  .forEach(function (filename) {
    const finalPath = path.join(__dirname, '/module', filename)
    const mm = require(finalPath)
    mm.forEach((x) => {
      app[x.type](x.url, x.cb)
    })
  })

app.listen('8090', () => {
  console.log('监听端口 8090')
})
