"use strict";

// 모듈
const express = require('express');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require('morgan');
const fs = require('fs');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();
dotenv.config();

// 라우팅
const home = require("./src/routes/home");

//log
var accessLogStream = fs.createWriteStream(
    `${__dirname}/log/access.log`, 
    { flags: 'a' })
 

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev', {stream: accessLogStream }));

app.use("/", home); // use -> 미들웨어를 등록해주는 메소드



// swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "login-lecture API",
      description: "Swagger 실습을 위한 문서입니다. login-lecture강의를 들으면서 제작한 API를 설명하고 있습니다.",
      version: '1.0.0',
    },
  },
  apis: ["swagger.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

module.exports = app;