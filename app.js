const http = require('http');
const httpServer = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8;');
    res.setHeader('X-My-Giao', `I'm Giao bro!!!`);
    res.end('vercel.json src必须是index.js，这种规定很奇怪啊');
});

httpServer.listen(3009, () => {
    console.log('3009……');
});