const webpack = require('webpack');

module.exports = {
    entry:  __dirname + "/app.js",//入口文件
    output: {
      path: __dirname + "/bundle",//打包后的文件存放的地方
      filename: "entry.js"//打包后输出文件的文件名
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [
      new webpack.BannerPlugin('测试webpack 实例')
    ]
  }
