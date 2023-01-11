const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send("여기는 루트")
});
app.get("/login", (req, res)=>{
    res.send("여기는 로그인 화면")
});
app.listen(3000, function(){
    console.log('hi');
});
