const http = require('http');
const httpServer = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8;');
    res.end('我是bin下的app.js，葫芦娃giao');
});

httpServer.listen(3009, () => {
    console.log('3009……');
});