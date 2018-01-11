/**
 * app入口
 * 
 */

const app = require('http'),
    express = require('express'),
    dir = require('fs');

app.createServer((request, response) => (
    response.writeHead(200, {'Content-Type': 'text/plain'}),
    // 发送响应数据 "Hello World"
    response.end('ceshi shuju'))
).listen(5656)

/****阻塞代码***/
// let file = dir.readFileSync('./html/abc.text');
// console.log(file.toString())

/*****非阻塞代码
 * 读取public代码
 * 
*/

    dir.readFile('./js/public.js', function(err, data) {
        if (err) return console.error(err);
        console.log(data.toString());
    })
console.log(123456789)