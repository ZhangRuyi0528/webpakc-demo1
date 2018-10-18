const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry:  __dirname + "/app.js",//入口文件
    output: {
      path: __dirname + "/bundle",//打包后的文件存放的地方
      filename: "entry.js"//打包后输出文件的文件名
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
            // 等同于直接执行style=style-loader!css-loader!"   //css解析
            },
            {
              test: /\.s[a|c]ss$/,
              loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
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
                name: '[name].[ext]?[hash]'
              }
            }
            //对element的字体文件遇到与webpack版本冲突，故将file-loader换成url-loader
        ]
    },
    devServer: {
      contentBase: "./bundle",//本地服务器所加载的页面所在的目录
      historyApiFallback: true,//不跳转
      inline: true//实时刷新
    },
    plugins: [
      new webpack.BannerPlugin('测试webpack 实例')
    ]
  }
