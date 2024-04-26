"use strict";
const express = require("express");
const multer = require("multer");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs')
//app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Importing routes
const uploadRoute = require('./routes/upload.route');
const adminEditRoute = require('./routes/adminEdit.route');
const productRoute = require('./routes/product.route');
const cartRoute = require('./routes/cart.route');
const userRouter = require("./routes/user.route");
app.use('/upload', uploadRoute);
app.use('/edit', adminEditRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.use(userRouter);

// render
app.get("/", (req, res) => {
    res.render("login");
});
app.get("/register", (req, res) => {
    res.render("register");
});
//render for products?

app.post('/logout', function(req, res) {
    req.session.destroy(function(err) {
        if(err) {
            console.error(err);
        } else {
            res.redirect('/login');
        }
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});