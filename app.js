const http = require('http');
const httpServer = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8;');
    res.end('app.js');
});

httpServer.listen(3009, () => {
    console.log('3009……');
});