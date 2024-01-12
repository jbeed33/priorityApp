const mongoose = require("mongoose");

const schema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  taskId: {
    type: String,
    required: [true, "Missing taskId"],
  },
  priority: {
    type: Number,
    required: [true, "Need to proivide a priority"],
  },
  status: {
    type: Number,
    required: [true, "Need to proivide a priority"],
  },
  title: {
    type: String,
    required: [true, "Missing a title"],
    minLength: [1, "Title is too short"],
    maxLength: [30, "Titile is too long"],
  },
  details: {
    type: String,
    required: false,
    minLength: [1, "Details is too short"],
    maxLength: [256, "Details is too long"],
  },
  lowToMediumDate: {
    type: Date,
  },
  mediumToHighDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
});

schema.set("collection", "tasks");

const Task = mongoose.model("Task", schema);

module.exports = Task;
