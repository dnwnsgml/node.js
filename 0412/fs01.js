const fs = require('fs');

fs.readFile('text1.txt', 'utf-8', (err, data) => {  //비동기식으로 파일읽기
    if (err) {
        console.log('error');
    } else {
        console.log(`비동기식으로 읽음: ${data}`);
    }
});

const text = fs.readFileSync('text1.txt', 'utf-8');
console.log(`동기식으로 읽음: ${text}`);