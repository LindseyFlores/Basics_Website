"use strict";
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routes/user.route");
const path = require('path');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res)=> {
    res.render("login");
});

app.use(userRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Sever running on port ${PORT}');
});
