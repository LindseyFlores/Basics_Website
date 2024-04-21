"use strict";

const sqlite3 = require('better-sqlite3');
const db = new sqlite3('./database.db'); //route to our database

module.exports = db;

// function all(sql, ...params) {
//   return db.prepare(sql).all(params);
// }

// function get(sql, ...params) {
//   return db.prepare(sql).get(params);
// }

// function run(sql, ...params) {
//   return db.prepare(sql).run(params[0]);
// }

// module.exports = {
//   all,
//   get,
//   run,
// };