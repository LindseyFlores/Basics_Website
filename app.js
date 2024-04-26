"use strict";
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');

// Middleware for parsing JSON bodies
app.use(express.json());  // This should be high up, before route handlers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View engine
app.set("view engine", "ejs");

// Import routes
const uploadRoute = require('./routes/upload.route');
const adminEditRoute = require('./routes/adminEdit.route');
const productRoute = require('./routes/product.route');
const cartRoute = require('./routes/cart.route');
//const userRouter = require("./routes/user.route");

// Setup routes
app.use('/upload', uploadRoute);
app.use('/edit', adminEditRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);
//app.use(userRouter);

// Root routes
app.get("/", (req, res) => {
    res.render("login");
});
app.get("/register", (req, res) => {
    res.render("register");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// "use strict";
// const express = require('express');
// const app = express();
// const uploadRoute = require('./routes/upload.route'); //admin
// const adminEditRoute = require('./routes/adminEdit.route'); //admin
// const productRoute = require('./routes/product.route'); //product
// const cartRoute = require('./routes/cart.route'); //cart
// //we might need a user route
// const bodyParser = require("body-parser");
// const userRouter = require("./routes/user.route");
// const path = require('path');

// app.use(express.static('public')); // to serve my HTML and CSS files?
// //routes
// app.use('/upload', uploadRoute); //This is for bulkUpload feature
// app.use('/edit', adminEditRoute); //For productEditPage
// app.use('/products', productRoute); //For product.html
// app.use('/cart', require('./routes/cart.route')); //For cart.html

// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(express.static(path.join(__dirname, 'public')));
// app.set("view engine", "ejs");

// app.get("/", (req, res)=> {
//     res.render("login");
// });
// app.get("/register", (req, res)=>{
//     res.render("register");
// });

// app.use(userRouter);
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
