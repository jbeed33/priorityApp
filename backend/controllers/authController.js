const User = require("../models/userModal");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = async (id, name) => {
  //token expires in 30 minutes
  return await jwt.sign({ id, name }, process.env.TOKEN_KEY, {
    expiresIn: "30m",
  });
};

const createCookie = (createdToken) => {
  //cookie expires in ??? minutes
  return {
    name: "authorization",
    token: createdToken,
    options: { maxAge: 60000000000, httpOnly: true },
  };
};

const authorize = async (req, res, next) => {
  // const token = req.cookies["authorization"];
  // console.log("Authorizaiton token", token);

  // if (!token) {
  //   // if they inputted email/username and password
  //   //check to see if the email/username and password is correct
  //   // create them one
  //   console.log("need a token");
  //   //return res.status(401).json({ msg: "Authorization token is missing" });
  // }

  // await jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
  //   if (err) {
  //     return res.status(401).json({ message: "Invalid token" });
  //   }

  //   console.log("Decode: ", decoded);
  //   req.user = decoded;
  //   next();
  // });

  next();
};

const post_signup_user = async (req, res, next) => {
  //check to see if whole uesr already exsists
  // if so send a responds that the user already exsists try again.

  let userId = uuidv4();

  try {
    const { name, email, username, password } = req.body;

    // hash the password
    const salt = process.env.HASH_KEY;
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({ userId, name, email, username, password: hash });
    await newUser.save();
    // const createdToken = await createToken(newUser.userId, name);
    // const cookie = createCookie(createdToken);
    // res.cookie(cookie.name, cookie.token, cookie.options);
    return res.status(201).send({ msg: "Account created." });
  } catch (e) {
    // still need to do a better job at error handling.
    console.error(`something went wrong in user sign up ${e}`);
  }
};

const post_login_user = async (req, res, next) => {
  console.log("session", req.session);
  const { email, password } = req.body;
  console.log("email or username: ", email);
  console.log("password: ", password);

  const salt = process.env.HASH_KEY;
  const hash = await bcrypt.hash(password, salt);
  console.log("hash: ", hash);
  try {
    let foundUser = await User.findOne({ email: email })
      .where("password")
      .equals(hash)
      .select("userId name");

    console.log("Found User:", foundUser);

    if (foundUser != null) {
      //need to create a session here return session Id to user, also need canRedirect

      //const token = await createToken(foundUser.userId, foundUser.name);
      //const cookie = createCookie(token);
      // res.cookie(cookie.name, cookie.token, cookie.options);
      // console.log(cookie);
      req.session.userId = foundUser.userId;
      console.log(req.session);
      return res.status(200).send({ msg: "Logging In", canRedirect: true });
    } else {
      return res.send({
        msg: "Username or Password is incorrect.",
        canRedirect: false,
      });
    }
  } catch (e) {
    return res
      .status(400)
      .send({ msg: "Incorrect Username or Password", canRedirect: false });
  }
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
