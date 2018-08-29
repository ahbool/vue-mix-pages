
const utils = require('./utils')
const config = require('./config')
const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const srcPath = utils.resolve('src')

module.exports = {
    entry: utils.entries(),
    output: {
        publicPath: '/',
        path: utils.resolve(config.buildDirectory),
        filename: utils.assetsPath('js/[name].[chunkhash:7].js')
    },
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            '@': srcPath
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            chunkFilename: utils.assetsPath("css/[name].[chunkhash:7].css")
        })
    ].concat(utils.htmlWebpackPlugin()),
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                    priority: 20,
                    enforce: true
                },
                commons: {
                    test: /[\\/]components[\\/]|[\\/]common[\\/]|[\\/]utils[\\/]|[\\/]store[\\/]|[\\/]api[\\/]|[\\/]assets[\\/]style[\\/]/,
                    name: 'common',
                    chunks: 'all',
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
                include: srcPath
            },
            {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader' ],
                include: srcPath
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: srcPath
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash:7].[ext]',
                        outputPath: utils.assetsPath('img')
                    }
                },
                include: srcPath
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash:7].[ext]',
                        outputPath: utils.assetsPath('fonts')
                    }
                },
                include: srcPath
            }
        ]
    }
}
