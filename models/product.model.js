const db = require('./db-conn');
//for category in product.html
exports.findProductsByCategory = (categoryName) => {
    try {
        const stmt = db.prepare('SELECT * FROM products WHERE category = ?');
        return stmt.all(categoryName);
    } catch (error) {
        throw error; // This will be caught by the controller
    }
};
//function that can retrieve information based on a productID
exports.findProductById = (productId) => {
    try {
        const stmt = db.prepare('SELECT * FROM products WHERE id = ?');
        return stmt.get(productId);  // Use get for a single product
    } catch (error) {
        throw error; // This will be caught by the controller
    }
};