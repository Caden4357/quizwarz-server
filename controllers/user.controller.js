import User from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const SECRET = process.env.SECRET_KEY
async function registerUser(req, res) {
    try {
        const potentialUser = await User.findOne({ email: req.body.email })
        if (potentialUser) {
            res.status(400).json({ message: 'This email already exists please log in' })
        }
        else {
            const newUser = await User.create(req.body)
            res.status(201).json(newUser)
        }
    }
    catch (err) {
        res.status(400).json(err)
    }
}

async function loginUser(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            const passwordsMatch = await bcrypt.compare(req.body.password, user.password)
            if (passwordsMatch) {
                res.status(201).json(user)
            }
            else {
                res.status(400).json({ message: 'Invalid Email/Password' })
            }
        }
        else {
            res.status(400).json({ message: 'Invalid Email/Password' })
        }
    }
    catch (err) {
        res.status(400).json({ error: err })
    }
}
async function logoutUser(req, res) {
    res.status(200).json({ message: 'Logged Out Successfully' })
}
async function getAllUsers(req, res) {
    try {
        const users = await User.find()
        res.status(200).json(users)
    }
    catch (err) {
        res.status(400).json({ error: err })
    }
}
export { registerUser, loginUser, logoutUser, getAllUsers }