/*
 * @Author: zry
 * @Date: 2021-03-30 15:53:45
 * @LastEditors: zry
 * @LastEditTime: 2021-03-31 17:37:31
 * @Description: 
 */
/* eslint-disable */
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.argv.config.js')();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const basePath = path.resolve(__dirname + './../');
console.log(1111, __dirname, basePath + '/bundle');

module.exports = merge(common, {
    // entry: path.resolve(basePath + '/app.js'), // 入口文件
    output: {
        library: 'Track_pack',
        libraryTarget: 'umd',
        path: basePath + '/bundle',//打包后的文件存放的地方
        filename: '[name].bundle.js',//打包后输出文件的文件名
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Your`s X-Jewelry',
            favicon: './zry.ico',
            template: path.resolve(basePath + '/app/html/index.html')
        }),
        // new WebpackBundleAnalyzer(),
    ]
});
