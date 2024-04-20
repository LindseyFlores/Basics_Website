"use strict";
const express = require('express')
const app = express()

const multer = require("multer")
app.use(multer().none())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const menuRouter = require("./routes/menu.route");
const cartRouter = require("./routes/cart.route")
const userRouter = require("./routes/user.route");



app.get('/', (req, res ) => {
    res.json({message: "hello"});
});

app.use("/menu", menuRouter);
app.use("/cart", cartRouter)
app.use("/users", userRouter);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("App listening at http://localhost:" + PORT);
});
