"use strict";
const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/fileUpload", ctrl.output.fileUpload);
router.get("/fileUpload2", ctrl.output.fileUpload2);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post("/fileUpload", ctrl.process.fileUpload);
router.post("/fileUpload2", ctrl.process.fileUpload2);


module.exports = router;