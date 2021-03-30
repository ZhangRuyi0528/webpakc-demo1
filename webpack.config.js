/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(1111, __dirname);

module.exports = {
    devtool: 'eval-source-map',
    entry:  {
        app: './app.js',
        // server: './a_server.js'
    },//入口文件
    output: {
        path: path.resolve(__dirname, 'bundle'),//打包后的文件存放的地方
        filename: '[name].bundle.js',//打包后输出文件的文件名
    },
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
                test: /\.s[c|a]ss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env', 'react'
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
        contentBase: path.join(__dirname, 'build'),//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        port: 8090, //启动端口
        inline: true//实时刷新
    },
    node: {
        fs: 'empty'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '测试webpack 实例',
            template: './html/index.html'
        })
    ]
}
