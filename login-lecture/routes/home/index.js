"use strict"; // ecma script를 준수하겠다는 뜻

const express = require('express');
const router = express.Router();

const ctrl = require("./home.ctrl")

router.get("/", ctrl.home);
router.get("/login", ctrl.login);

module.exports = router;