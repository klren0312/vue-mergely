const path = require('path')
const webpack = require('webpack')
module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV === 'development',
  configureWebpack: {
    resolve: {
      alias: {
        'mergely':		path.join(__dirname, 'node_modules', 'mergely'),
        'CodeMirror':	path.join(__dirname, 'node_modules', 'codemirror'),
        'jQuery':		path.join(__dirname, 'node_modules', 'jquery'),
        '$':			path.join(__dirname, 'node_modules', 'jquery')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        CodeMirror: 'codemirror'
      })
    ]
  }
}