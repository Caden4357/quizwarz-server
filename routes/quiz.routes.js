import { Router } from "express";
import * as QuizController from "../controllers/quiz.controller.js";
import authenticate from '../config/jwt.config.js';
const router = Router();

router.post("/post/quiz", authenticate, QuizController.createQuiz)
router.get("/get/quizzes", authenticate, QuizController.getUsersQuizzes)
export default router;