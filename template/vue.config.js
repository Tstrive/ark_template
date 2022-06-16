const { defineConfig } = require('@vue/cli-service')
const packageName = require('./package.json').name
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath:
    process.env.NODE_ENV == 'production' ? '/other/<%= options.path %>' : './',
  filenameHashing: true,
  assetsDir: 'selfstatic',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/xxx': {
        target: 'http://127.0.0.1:8090',
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
    },
  },
})
