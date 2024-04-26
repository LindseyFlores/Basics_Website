const cartModel = require('../models/cart.model');

async function addToCart(req, res) {
    const { cartId, productId, quantity, size } = req.body;
    try {
        const result = await cartModel.addToCart(cartId, productId, quantity, size);
        if (result.changes) {
            res.json({ success: true, message: 'Product added to cart successfully.' });
        } else {
            res.status(400).json({ success: false, message: 'Failed to add product to cart.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
async function removeFromCart(req, res) {
    const { cartId, productId } = req.body;
    try {
        const result = await cartModel.removeFromCart(cartId, productId);
        if (result.changes) {
            res.json({ success: true, message: 'Product removed from cart successfully.' });
        } else {
            res.status(400).json({ success: false, message: 'Failed to remove product from cart.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
async function checkoutCart(req, res) {
    const { cartId } = req.body;
    try {
        const result = await cartModel.checkoutCart(cartId);
        if (result.changes > 0 || result.message === 'Checkout successful and cart cleared') {
            res.json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: 'Failed to checkout. No changes made.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}


module.exports = {
    addToCart,
    removeFromCart,
    checkoutCart
};