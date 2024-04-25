"use strict";
const express = require('express');
const app = express();
const uploadRoute = require('./routes/upload.route');
const adminEditRoute = require('./routes/adminEdit.route');

const bodyParser = require("body-parser");
const userRouter = require("./routes/user.route");
const path = require('path');

app.use(express.json());
app.use(express.static('public')); // to serve my HTML and CSS files?
//routes
app.use('/upload', uploadRoute); //This is for bulkUpload feature
app.use('/edit', adminEditRoute); //For productEditPage
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));//!!!!!!!!!!!!!!!!!!

app.get("/", (req, res)=> {
    res.render("login");
});

app.use(userRouter);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
