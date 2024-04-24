const db = require('./db-conn');

exports.findProductById = (id) => {
    try {
        const stmt = db.prepare('SELECT * FROM products WHERE id = ?');
        return stmt.get(id);
    } catch (error) {
        throw new Error('Error accessing the database');
    }
};

exports.updateProduct = (id, category, name, price, description, image) => {
    try {
        const stmt = db.prepare(
            'UPDATE products SET category = ?, name = ?, price = ?, description = ?, image = ? WHERE id = ?'
        );
        const result = stmt.run(category, name, price, description, image, id);
        return result;
    } catch (error) {
        console.error('SQLite error:', error.message); // Log detailed SQLite error
        throw error; // Rethrow to be handled in the controller
    }
};
