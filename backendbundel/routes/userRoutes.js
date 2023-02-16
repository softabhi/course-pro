import express from 'express'
import { changePassword, getMyProfile, login, logout, register } from '../controllers/userController.js';
import { isAuthenticated } from '../middlewares/auth.js';


const router = express.Router();
 

// to register new user
router.route("/register").post(register);
// login 
router.route("/login").post(login);
// for logout
router.route("/logout").get(logout);
//for get profile
router.route("/me").get(isAuthenticated, getMyProfile);
router.route("/changepassword").put(isAuthenticated, changePassword);




export default router;