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
const common = require('./webpack.argv.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(99, merge, common);
console.log(1111, __dirname);
const basePath = path.resolve(__dirname + './..');

module.exports = common;
return;
merge(common, {
    devtool: 'eval-source-map',
    entry: path.resolve(basePath + '/app.js'), // 入口文件
    output: {
        // path: __dirname + '/bundle',//打包后的文件存放的地方
        path: path.resolve(basePath + './bundle'),//打包后的文件存放的地方
        filename: '[name].bundle.js',//打包后输出文件的文件名
    },
    // devServer: {
    //     contentBase: path.join(__dirname, '../build'),//本地服务器所加载的页面所在的目录
    //     historyApiFallback: true,//不跳转
    //     port: 8090, //启动端口
    //     inline: true//实时刷新
    // },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Your`s X-Jewelry',
    //         favicon: './zry.ico',
    //         template: path.resolve(basePath + '/app/html/index.html')
    //     })
    // ]
});
