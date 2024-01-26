const Task = require("../models/taskModel");
const { v4: uuidv4 } = require("uuid");
const { db } = require("../controllers/authController");

const post_create_task = async (req, res) => {
  console.log("made it into create task");
  const taskId = uuidv4();
  const updatedAt = new Date();
  const createdAt = new Date();
  const userId = req.userId;

  const {
    priority,
    status,
    title,
    details,
    lowToMediumDate,
    mediumToHighDate,
  } = req.body;

  console.log(req.body);
  try {
    const newTask = new Task({
      userId,
      taskId,
      priority,
      status,
      title,
      details,
      lowToMediumDate,
      mediumToHighDate,
      createdAt,
      updatedAt,
    });

    await newTask.save();

    res.status(200).send({ msg: "new task created" });
  } catch (e) {
    res.status(400).send({ msg: "Task error: " + e });
  }
};

const patch_update_task = async (req, res) => {
  console.log("Inside update task");
  console.log("Task ID: ", req.body.taskId);
  try {
    //find a task with taskId and udpate the right parts
    const task = await Task.findOneAndUpdate(
      { taskId: req.body.taskId },
      req.body
    );

    console.log(task);

    console.log("updated task");
    res.status(200).send("udpated");
  } catch (e) {
    res.status(400).send("Task update error: " + e);
  }
};

const get_tasks_by_user = async (req, res) => {
  //TODO: Update all priority for each task, check the day and see if it has changed priority
  //Maybe send notifications of what tasks got updated??
  try {
    const id = req.userId;

    const allTasks = await Task.find({ userId: id });
    console.log("all tasks", allTasks);

    if (allTasks.length == 0) {
      res.status(200).send(allTasks);
      return;
    }

    let returnTasks = [];

    //Organize them by status
    allTasks.forEach((task) => {
      returnTasks.push(task);
    });

    console.log(returnTasks);

    res.status(200).send(returnTasks);
  } catch (e) {
    res.status(400).send("Get all task error: " + e);
  }
};

const delete_task = async (req, res) => {
  try {
    const { taskId } = req.body;

    const taskDeleted = await Task.deleteOne({ taskId });

    console.log(taskDeleted);

    res.status(200).send({ msg: "Task deleted" });
  } catch (e) {
    res.status(400).send("Delete task error: " + e);
  }
};

module.exports = {
  post_create_task,
  patch_update_task,
  get_tasks_by_user,
  delete_task,
};
