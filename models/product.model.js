const db = require('./db-conn');
exports.findProductsByCategory = (categoryName) => {
    try {
        const stmt = db.prepare('SELECT * FROM products WHERE category = ?');
        return stmt.all(categoryName);
    } catch (error) {
        throw error; // This will be caught by the controller
    }
};

//for category in product.html