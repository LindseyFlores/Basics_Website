const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/category/:categoryName', productController.getProductsByCategory);

module.exports = router;
