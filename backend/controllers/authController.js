const post_signup_user = (req, res, next) => {
  res.send({ msg: "Sign up called" });
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
