const productModel = require('../models/adminEdit.model');

exports.getProductById = async (req, res) => {
    try {
        const product = await productModel.findProductById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (error) {
        console.error('Error: ', error.message);
        res.status(500).send('Server error');
    }
};

exports.updateProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const { category, name, price, description, image } = req.body;
        const result = await productModel.updateProduct(id, category, name, price, description, image);
        if (result.changes > 0) {
            res.send('Product updated successfully');
        } else {
            res.status(404).send('No product found with the given ID');
        }
    } catch (error) {
        console.error('Error: ', error.message);
        res.status(500).send('Server error');
    }
};

