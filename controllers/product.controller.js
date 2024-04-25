const productModel = require('../models/product.model'); // Adjust the path as necessary

exports.getProductsByCategory = async (req, res) => {
    try {
        const { categoryName } = req.params;
        const products = await productModel.findProductsByCategory(categoryName);
        res.json(products);
    } catch (error) {
        console.error('Error fetching products by category:', error);
        res.status(500).send('Server error');
    }
};
