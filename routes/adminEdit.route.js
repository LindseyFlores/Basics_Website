const express = require('express');
const router = express.Router();
const { getProductById, updateProductById } = require('../controllers/adminEdit.controller');

router.get('/products/:id', getProductById);  // Fetch a product by ID
router.put('/products/:id', updateProductById);  // Update a product by ID

module.exports = router;
