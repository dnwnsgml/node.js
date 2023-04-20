const http = require('http');

// node의 기본주소
const hostname = '127.0.0.1'    // 서버주소
const port = 3000;              // 서버안에 있는 프로그램 이름

const server = http.createServer((req, res) => {
    res.statusCode = 200;   //200 = 정상
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`서버실행...http://${hostname}:${port}/`)
})