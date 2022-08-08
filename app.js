#!/usr/bin/env node
const http = require('http');
const httpServer = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8;');
    res.end('我是好人');
});

httpServer.listen(3009, () => {
    console.log('3009……');
});