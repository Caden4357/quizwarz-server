import { Router } from "express";
import * as UserController from "../controllers/user.controller.js";
import authenticate from '../config/jwt.config.js';
const router = Router();

router.post("/register", UserController.registerUser);
router.get("/users", authenticate, UserController.getAllUsers);
router.post("/login", UserController.loginUser);
router.post("/logout", authenticate, UserController.logoutUser);

export default router;