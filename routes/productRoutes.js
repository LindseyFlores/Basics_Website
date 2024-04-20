const express = require('express');
const router = express.Router();

// Stub for getting product data
router.get('/products', (req, res) => {
  // Returning mock data
  console.log("Request received for products");
  res.json([
    { id: 1, name: 'basics. pufferjacket', price: '169.00 USD', imageUrl: '../images/1.png' },
    { id: 2, name: 'basics. puffer vest', price: '69.00 USD', imageUrl: '../images/vest 1.png' },
    // Add more products as needed
  ]);
});

//Stub for getting a single product
router.get('/products/:id', (req, res) => {
    console.log(`Request for product ID: ${req.params.id}`);
    // Mock data response for demonstration
    res.json({
      id: req.params.id,
      name: 'basics. puffer jacket',
      price: '169.00 USD',
      images: ['../images/puffer 1.png', '../images/puffer 2.png', '../images/puffer 3.png'],
      color: 'Black',
      sizes: ['S', 'M', 'L', 'XL']
    });
  });
  



module.exports = router;
