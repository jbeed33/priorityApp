const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
router.post("/signup", authController.post_signup_user);
router.post("/login", authController.post_login_user);
router.post(
  "/signout",
  authController.authorize,
  authController.post_sign_out_user
);

router.patch("/edit", authController.authorize, authController.patch_edit_user);

module.exports = router;
