const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const authController = require("../controllers/authController");

router.post(
  "/create",
  authController.authorize,
  taskController.post_create_task
);

router.delete("/delete", authController.authorize, taskController.delete_task);

router.patch(
  "/edit",
  authController.authorize,
  taskController.patch_update_task
);

router.get(
  "/tasks",
  authController.authorize,
  taskController.get_tasks_by_user
);

module.exports = router;
