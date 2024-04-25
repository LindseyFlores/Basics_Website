"use strict";
const db = require('../models/db-conn');
const userModel = require("../models/user.model");
const cartModel = require("../models/cart.model");

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    } else {
      const userResult = await userModel.createUser(email, password);
      if (userResult) {
        await cartModel.createCart(userResult.lastInsertRowid);
        return res.redirect('/homepage.html');
      } else {
        return res.status(500).json({ error: "Failed to create user" });
      }
    }
  } catch (error) {
    return res.status(500).json({ error: "Registration failed: " + error.message });
  }
};


const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findUserByEmail(email);
    if (!user || user.user_password !== password) {
      return res.status(401).json({ error: "Invalid email or password"});
    } else {
      if (user.user_email === "basicsadmin300x@gmail.com" && user.user_password === "admin123") {
        return res.redirect('/bulkUpload.html');
      } else {
        return res.redirect('/homepage.html');
      }
    }
  } catch (error) {
    return res.status(500).json({ error: "Login failed: " + error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
