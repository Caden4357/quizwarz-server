import Quiz from '../models/quiz.js';
import jwt from 'jsonwebtoken';
const SECRET = process.env.SECRET_KEY;

async function createQuiz(req, res) {
    try {
        const newQuiz = await Quiz.create(req.body);
        res.status(201).json(newQuiz);
    }
    catch (err) {
        res.status(400).json(err);
    }
}
async function getUsersQuizzes(req, res) {
    try {
        const token = req.cookies.userToken;
        const decoded = jwt.verify(token, SECRET);
        const quizzes = await Quiz.find({ user: decoded._id });
        res.status(200).json(quizzes);
    }
    catch (err) {
        res.status(400).json(err);
    }
}

export { createQuiz, getUsersQuizzes };