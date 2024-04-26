"use strict";
const db = require("./db-conn");

function createCart(userId) { //creates a new cart for new users
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
function addToCart(cartId, productId, quantity, size) { // Goal: insert a new record into cart_products table
    return new Promise((resolve, reject) => {
        try {
            const insert = db.prepare('INSERT INTO cart_Products (cart_id, product_id, quantity, size) VALUES (?, ?, ?, ?);');
            const result = insert.run(cartId, productId, quantity, size);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}
function removeFromCart(cartId, productId) { //Goal: remove a record from cart_products table
    return new Promise((resolve, reject) => {
        try {
            const stmt = db.prepare('DELETE FROM cart_Products WHERE cart_id = ? AND product_id = ?;');
            const result = stmt.run(cartId, productId);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}
function checkoutCart(cartId) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(() => {
            const updateCart = db.prepare('UPDATE cart SET status = \'checked_out\' WHERE cart_id = ?;');
            const cartResult = updateCart.run(cartId);
            const deleteProducts = db.prepare('DELETE FROM cart_Products WHERE cart_id = ?;');
            const productResult = deleteProducts.run(cartId);

            // Resolve with actual changes or simply true to indicate success
            resolve({ changes: cartResult.changes + productResult.changes });
        });
        try {
            transaction();
        } catch (error) {
            reject(error);
        }
    });
}



module.exports = {
    createCart,
    addToCart,
    removeFromCart,
    checkoutCart
};