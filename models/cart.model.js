"use strict";
const db = require("./db-conn");

function createCart(userId) {
    return new Promise((resolve, reject) => {
        try {
            const insert = db.prepare('INSERT INTO cart (user_id, status) VALUES (?, \'active\');');
            const result = insert.run(userId);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}


module.exports = {
    createCart
};