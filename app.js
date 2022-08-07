const http = require('http');
const httpServer = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8;');
    res.end('我是好人');
});

httpServer.listen(3000, () => {
    console.log('3000……');
});