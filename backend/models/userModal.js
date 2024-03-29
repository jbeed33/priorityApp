const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

//TODO: need to find a way to make sure that a Schema is unique and emails are only used once.

const schema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: [true, "Please enter a name"],
    minLength: [1, "Name is too short"],
    maxLength: [256, "Name is too long"],
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, "Please enter an email"],
    minLength: [1, "Email is too short"],
    maxLength: [320, "Email is too long"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minLength: [5, "Password is too pasword"],
    maxLength: [256, "Password is too password"],
  },
});

//set schema to communicate to a specific collection within a database.
schema.set("collection", "users");

const User = mongoose.model("User", schema);

module.exports = User;
