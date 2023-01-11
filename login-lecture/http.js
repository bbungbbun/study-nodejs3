// http로 개발한 서버
// express를 이용한 서버보다 코드의 복잡성이 높다.

const http = require('http');
const app = http.createServer((req, res)=>{
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
    if(req.url === "/"){
        res.end("여기는 루트");
    } else if (req.url === "/login"){
        res.end("여기는 로그인");
    }
});

app.listen(3001, ()=>{
    console.log('http 서버입니다.')
});