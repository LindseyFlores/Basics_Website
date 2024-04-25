"use strict";
const db = require("../models/db-conn");

function findUserByEmail(email) {
  const select = db.prepare('SELECT * FROM users WHERE user_email = ?;');
  const user = select.get(email);
  return user;
}
function createUser(email, password) {
  const insert = db.prepare('INSERT INTO users (user_email, user_password) VALUES (?,?);');
  const result = insert.run(email, password);
  return result;
}

module.exports = {
  createUser,
  findUserByEmail
};