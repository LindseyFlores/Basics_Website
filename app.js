"use strict";
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');

// Middleware for parsing our JSON bodies
app.use(express.json());  // This should be high up, before route handlers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// View engine
app.set("view engine", "ejs");

// Importing routes
const uploadRoute = require('./routes/upload.route');
const adminEditRoute = require('./routes/adminEdit.route');
const productRoute = require('./routes/product.route');
const cartRoute = require('./routes/cart.route');
const userRouter = require("./routes/user.route");

// routes
app.use('/upload', uploadRoute);
app.use('/edit', adminEditRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.use(userRouter);

// Root routes
app.get("/", (req, res) => {
    res.render("login");
});
app.get("/register", (req, res) => {
    res.render("register");
});

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