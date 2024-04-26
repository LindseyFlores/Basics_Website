const productModel = require('../models/product.model');

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
exports.getProductDetails = async (req, res) => {
    try {
        const productId = req.params.id;  // Assuming the product ID is sent as a URL parameter
        const product = await productModel.findProductById(productId);
        if (product) {
            res.json(product);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
};