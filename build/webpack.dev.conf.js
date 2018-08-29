
const utils = require('./utils')
const config = require('./config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    optimization: {
        minimize: false
    },
    devServer: {
        contentBase: utils.resolve(config.buildDirectory),
        allowedHosts: [
            'localhost'
        ],
        port: config.devPort,
        open: true,
        proxy: {
          '/api': {
              target: `http://localhost:${config.mockPort}`,
              changeOrigin: true,
              pathRewrite: function (_path, req) {
                //可查看http-proxy-middleware插件中对pathRewrite属性的说明
                //return _path.replace(/\/api\/.*\/([^?]+)(\?.*)?/, '/api/$1.json')
              }
          }
        }
    }
})

