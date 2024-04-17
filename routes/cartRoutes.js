const express = require('express');
const router = express.Router();

// Fetch cart items
router.get('/cart', (req, res) => {
    console.log("Fetching cart items");
    res.json({
        items: [
            { name: "basics. beanie", price: 22.00, quantity: 2 },
            { name: "basics. scarf", price: 35.00, quantity: 2 }
        ],
        totals: {
            subtotal: 114.00,
            tax: 2.70,
            delivery: 15.00,
            total: 131.70
        }
    });
});

// Add item to cart
router.post('/cart/add', (req, res) => {
    console.log("Adding item to cart", req.body);
    // Stub response for success
    res.status(201).send("Item added to cart");
});

// Remove item from cart
router.post('/cart/remove', (req, res) => {
    console.log("Removing item from cart", req.body);
    // Stub response for success
    res.status(200).send("Item removed from cart");
});

module.exports = router;