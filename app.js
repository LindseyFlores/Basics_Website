"use strict";
const express = require('express')
const app = express()

const multer = require("multer")
app.use(multer().none())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cartRouter = require("./routes/cart.route")
const productRouter = require("./routes/product.route");



app.get('/', (req, res ) => {
    res.json({message: "hello"});
});

app.use("/cart", cartRouter)
app.use("/product", productRouter);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("App listening at http://localhost:" + PORT);
});
