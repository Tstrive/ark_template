// generator.js
module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    // 命令
    scripts: {
      mock: 'nodemon ./mock/index.js',
      serve: 'vue-cli-service serve',
      build: 'vue-cli-service build',
      lint: 'vue-cli-service lint',
    },
    dependencies: {
      axios: '^0.26.1',
      echarts: '^5.3.1',
      gsap: '^3.9.1',
      'normalize.css': '^8.0.1',
      'core-js': '^3.8.3',
      vue: '^2.6.14',
      'vue-router': '^3.5.1',
      vuex: '^3.6.2',
      'element-ui': '^2.15.8',
      hsja_ark: '1.0.0',
    },
    devDependencies: {
      '@babel/core': '^7.12.16',
      '@babel/eslint-parser': '^7.12.16',
      '@vue/cli-plugin-babel': '~5.0.0',
      '@vue/cli-plugin-eslint': '~5.0.0',
      '@vue/cli-plugin-router': '~5.0.0',
      '@vue/cli-service': '~5.0.0',
      express: '^4.17.3',
      mockjs: '^1.1.0',
      nodemon: '^2.0.15',
      eslint: '^7.32.0',
      'babel-plugin-component': '^1.1.1',
      'eslint-config-prettier': '^8.3.0',
      'eslint-plugin-prettier': '^4.0.0',
      'eslint-plugin-vue': '^8.0.3',
      'lint-staged': '^11.1.2',
      prettier: '^2.4.1',
      sass: '^1.32.7',
      'sass-loader': '^12.0.0',
      'vue-template-compiler': '^2.6.14',
    },
    gitHooks: {
      'pre-commit': 'lint-staged',
    },
  })
  // 删除 vue-cli3 默认目录
  api.render((files) => {
    Object.keys(files)
      .filter((path) => path.startsWith('src/') || path.startsWith('public/'))
      .forEach((path) => delete files[path])
  })
  // 复制template模版
  api.render('./template', {
    ...options,
    name: rootOptions.projectName,
  })
}
