const { Router } = require("express");
const router = Router();
// const UserRoute = require('../models/UserRoute');
const {
  registerUser,
  loginUser,
  logout,
  getUser,
  loginStatus,
  updateUser,
  changePassword,
  forgotPassword,
} = require("../controller/userController");
const protect = require("../middleware/authMiddleware");

// Create a new userRoute
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/getuser", protect, getUser);
router.get("/loggedin", loginStatus);
router.patch("/updateuser", protect, updateUser);
router.patch("/changepassword", protect, changePassword);
router.post("/forgotpassword", protect, forgotPassword);

module.exports = router;
