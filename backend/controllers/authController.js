const User = require("../models/userModal");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = async (id, name) => {
  return await jwt.sign({ id, name }, process.env.TOKEN_KEY);
};

const authorize = async (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Authorization token is missing" });
  }

  await jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = decoded;
    next();
  });
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
    res.cookie("auth", createdToken, { httpOnly: true });
    res.send({ msg: "Account created." });
  } catch (e) {
    // still need to do a better job at error handling.
    console.error(`something went wrong in user sign up ${e}`);
  }
};

const post_login_user = (req, res, next) => {
  //Do stuff
  // create token
  //else error handle
  res.send({ msg: "Login called" });
};

const post_sign_out_user = (req, res, next) => {
  // set cookie to empty and has a very short expiration date
  res.send({ msg: "Sign out called" });
};

const patch_edit_user = (req, res, next) => {
  //This comes later
  res.send({ msg: "Edit called" });
};

module.exports = {
  post_login_user,
  post_sign_out_user,
  post_signup_user,
  patch_edit_user,
  authorize,
};
