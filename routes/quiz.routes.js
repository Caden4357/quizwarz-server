import { Router } from "express";
import * as QuizController from "../controllers/quiz.controller.js";
const router = Router();

router.post("/post/quiz", QuizController.createQuiz)
router.get("/get/quizzes/:id", QuizController.getUsersQuizzes)
export default router;