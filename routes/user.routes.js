import { Router } from "express";
import * as UserController from "../controllers/user.controller.js";
const router = Router();

router.post("/register", UserController.registerUser);
router.get("/users", UserController.getAllUsers);
router.post("/login", UserController.loginUser);
router.post("/logout", UserController.logoutUser);

export default router;