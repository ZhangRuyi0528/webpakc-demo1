module.exports = {
    entry:  __dirname + "/app.js",//入口文件
    output: {
      path: __dirname + "/bundle",//打包后的文件存放的地方
      filename: "entry.js"//打包后输出文件的文件名
    }
  }
