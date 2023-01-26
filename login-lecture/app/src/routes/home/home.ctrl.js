"use strict";
const User = require("../../models/User");
const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
  fileUpload: (req, res) => {
    res.render(`home/fileUpload`);
  },
  fileUpload2: (req, res) => {
    res.render(`home/fileUpload2`);
  },
};
const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
  fileUpload: async (req, res) => {
    const user = new User(req.body);
    const response = await user.fileUpload();
    return res.json(response);
  },
  fileUpload2: async (req, res) => {
    const user = new User(req.body);
    const response = await user.fileUpload2();
    return res.json(response);
  },
};
module.exports = {
  output,
  process,
};