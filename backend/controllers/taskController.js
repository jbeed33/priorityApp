const Task = require("../models/taskModel");
const { v4: uuidv4 } = require("uuid");

const post_create_task = async (req, res) => {
  const taskId = uuidv4();
  const udpatedAt = new Date();
  const createdAt = new Date();

  const {
    userId,
    priority,
    status,
    title,
    details,
    lowToMediumDate,
    mediumToHighDate,
  } = req.body;

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
  try {
    //find a task with taskId and udpate the right parts
    const task = await Task.findOneAndUpdate(
      { taskId: req.body.taskId },
      req.body
    );

    res.status(200).send("udpated");
  } catch (e) {
    res.status(400).send("Task update error: " + e);
  }
};

const get_tasks_by_user = async (req, res) => {
  try {
    const { userId } = req.body;

    const allTasks = await Task.find({ userId });

    res.status(200).send(allTasks);
  } catch (e) {
    res.status(400).send("Get all task error: " + e);
  }
};

const delete_task = async (req, res) => {
  try {
    const { taskId } = req.body;

    await Task.deleteOne({ taskId });

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
