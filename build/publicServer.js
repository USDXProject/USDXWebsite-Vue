/* 
 * 此文件为模拟线上服务器
 */

const express=require('express');
const fs = require('fs');
const DIST = 'dist';
var opn = require('opn');
var port = 1111;
var app=express();
app.listen(port);
app.use('/js',express.static(DIST+'/js'));
app.use('/images',express.static(DIST+'/images'));
app.use('/css',express.static(DIST+'/css'));
app.use('/favicon.ico',express.static(DIST+'/favicon.ico'));

app.use((req,res)=>{
    fs.readFile(DIST+'/index.html', 'utf-8',(err,content) => {
        if (err) {
            content = 'We cannot open \'index.html\' file.'
            console.log(content);
        }
        res.send(content);
    });
});
opn('http://localhost:'+port);
