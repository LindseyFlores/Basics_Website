"use strict";
const model = require("../models/user.model");

const registerUser = (req, res) => {
  const {name, email, password} = req.body;
  const existingUser = model.findUserByEmail(email);
  if (existingUser) {
    return res.status(400).json({error: "Email already exists"});
  } else {
    const userId = model.createUser(email, password);
    return res.redirect('/homepage.html');
  }
}

const loginUser = (req, res) => {
  const {email, password} = req.body;
  const user = model.findUserByEmail(email);
  if (!user || user.user_password !== password) {
    return res.status(401).json({ error: "Invalid email or password"});
  } else {
    if (user.user_email === "basicsadmin300x@gmail.com" && user.user_password === "admin123") {
      return res.redirect('/bulkUpload.html');
    } else {
      return res.redirect('/homepage.html');
    }
  }
}

module.exports = {
  registerUser,
  loginUser,
};
