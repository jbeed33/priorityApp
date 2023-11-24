const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.post("/create", taskController.post_create_task);

router.delete("/delete", taskController.delete_task);

router.patch("/edit", taskController.patch_update_task);

router.get("/tasks", taskController.get_tasks_by_user);

module.exports = router;
