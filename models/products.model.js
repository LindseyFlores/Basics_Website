const db = require('./db-conn');

exports.bulkInsertProducts = (products) => {
    const insert = db.prepare(`INSERT INTO products (category, name, price, description, image) VALUES (?, ?, ?, ?, ?)`);
    const insertMany = db.transaction((products) => {
        try {
            for (const product of products) {
                insert.run(product.category, product.name, parseFloat(product.price), product.description, product.image);
            }
        } catch (error) {
            console.error("Failed to insert products:", error);
            throw error; // This will rollback the transaction due to throwing within a transaction
        }
    });

    try {
        insertMany(products);
    } catch (error) {
        // Handle or log the error appropriately
        console.error("Transaction failed:", error);
    }
};
