const User = require("../models/userModal");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = async (id, name) => {
  return jwt.sign({ id, name }, process.env.TOKEN_KEY);
};

const post_signup_user = async (req, res, next) => {
  //check to see if whole uesr already exsists
  // if so send a responds that the user already exsists try again.

  let userId = uuidv4();

  try {
    const { name, email, username, password } = req.body;

    // hash the password
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({ userId, name, email, username, password: hash });
    await newUser.save();
    const createdToken = await createToken(newUser._id, name);
    res.cookie("auth", await createdToken, { httpOnly: true });
    res.send({ msg: "Account created." });
  } catch (e) {
    console.error(`something went wrong in user sign up ${e}`);
  }
};

const post_login_user = (req, res, next) => {
  res.send({ msg: "Login called" });
};

const post_sign_out_user = (req, res, next) => {
  res.send({ msg: "Sign out called" });
};

const patch_edit_user = (req, res, next) => {
  res.send({ msg: "Edit called" });
};

module.exports = {
  post_login_user,
  post_sign_out_user,
  post_signup_user,
  patch_edit_user,
};
