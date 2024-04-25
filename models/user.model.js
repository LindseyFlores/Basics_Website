"use strict";
const db = require("./db-conn");

function findUserByEmail(email) {
  return new Promise((resolve, reject) => {
    try {
      const select = db.prepare('SELECT * FROM users WHERE user_email = ?;');
      const user = select.get(email);
      if (user) {
        resolve(user);
      } else {
        resolve(null); // Change this line to resolve to null instead of rejecting.
      }
    } catch (error) {
      reject(new Error(`Database error: ${error.message}`));
    }
  });
}

function createUser(email, password) {
  return new Promise((resolve, reject) => {
    try {
      const insert = db.prepare('INSERT INTO users (user_email, user_password) VALUES (?, ?);');
      const result = insert.run(email, password);
      if (result.changes) {
        resolve(result);
      } else {
        reject(new Error("No user was created."));
      }
    } catch (error) {
      reject(new Error(`Database error: ${error.message}`));
    }
  });
}

module.exports = {
  createUser,
  findUserByEmail
};
