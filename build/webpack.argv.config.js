/*
 * @Author: zry
 * @Date: 2021-03-30 15:53:16
 * @LastEditors: zry
 * @LastEditTime: 2021-03-31 17:33:50
 * @Description: 
 */
/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtennalPlugin = require('./ExternalPlugin');

const basePath = path.resolve(__dirname + './../');
console.log(1111, __dirname, basePath, 99199, ExtennalPlugin.externals);

let config = {
    entry: path.resolve(__dirname + './../app.js'), // 入口文件
    output: {
        // path: __dirname + '/bundle',//打包后的文件存放的地方
        path: basePath + '/bundle',//打包后的文件存放的地方
        filename: 'entry.js'//打包后输出文件的文件名
    },
    resolve: {
        extensions: ['.js', '.vue'],
    },
    externals: ExtennalPlugin.externals,
    module: {
        rules: [
            { 
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                ]
            // 等同于直接执行style=style-loader!css-loader!'   //css解析
            },
            {
                test: /\.s[a|c]ss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'es2015', 'react'
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            },
            // 解析vue引入的字符文件
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    publicPath:'/'
                }
            }
            //对element的字体文件遇到与webpack版本冲突，故将file-loader换成url-loader
        ]
    },
    devServer: {
        contentBase: __dirname,//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        // port: 8090, //启动端口
        inline: true//实时刷新
    },
    plugins: [
        // new ExtennalPlugin(),
        new HtmlWebpackPlugin({
            title: '测试webpack 实例',
            favicon: './zry.ico',
            template: './app/html/index.html'
        })
    ]
}

module.exports = (env, argv) => {
    if (env === 'development') {
        config.devtool = 'source-map';
    }

    if (env === 'production') {
        config.devtool = 'eval-source-map';
    }

    return config;
}