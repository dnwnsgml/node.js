const fs = require('fs');
const data = 'Hello Node.js!';

fs.writeFile('text2.txt', data, 'utf-8', (err) => {     // 비동기식 파일쓰기
    if (err) {
        console.log('error');
    } else {
        console.log('not error');
    }
});

fs.writeFileSync('text3.txt', data, 'utf-8');   // 동기식으로 파일쓰기
console.log('저장완료 / 동기');