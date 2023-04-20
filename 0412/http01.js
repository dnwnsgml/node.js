const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });   //res.statusCode, res.setHeader() 합쳐서 선언
    res.end('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>http모듈 test</title></head><body style="background-color: rgb(127, 127, 127);"><h2>http 모듈 테스트</h2><p>처음으로 실행하는 node.js http서버</p></body></html>');
}
).listen(3000, () => {
    console.log('서버실행중...');
});