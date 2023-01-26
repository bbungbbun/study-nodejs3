"use strict";
const db = require("../config/db");

class fileStorage {
  static async save(info) {
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