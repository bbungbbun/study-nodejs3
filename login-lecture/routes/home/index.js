"use strict"; // ecma script를 준수하겠다는 뜻

const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("home/index");
});
router.get("/login", (req, res)=>{
    res.render("home/login");
});

module.exports = router;