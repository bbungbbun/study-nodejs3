"use strict";
const db = require("../config/db");

class fileStorage {
  static async save1(info) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO pictures(name, url) VALUES(?, ?);";
      db.query(query, [info.name, info.url], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }

  static async save2(info) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO files(id, name, size, url) VALUES(?, ?, ?, ?);";
      db.query(query, [info.id, info.name, info.size, info.url], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }
}
module.exports = fileStorage;