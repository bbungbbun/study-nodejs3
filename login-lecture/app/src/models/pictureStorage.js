"use strict";

const db = require("../config/db");

class pictureStorage {
  // static getPictureInfo(id) {
  //   return new Promise((resolve, reject) => {
  //     const query = "SELECT * FROM pictures WHERE id = ?;";
  //     db.query(query, [id], (err, data) => {
  //       if (err) reject(`${err}`);
  //       resolve(data[0]);
  //     });
  //   });
  // }

  static async save(info) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO pictures(name, url) VALUES(?, ?);";
      db.query(query, [info.name, info.url], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }
}
module.exports = pictureStorage;