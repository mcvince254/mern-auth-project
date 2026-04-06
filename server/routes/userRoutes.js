import express from "express"
import userAuth from "../middleware/userAuth.js"; // Added .js
import { getUserData } from "../controllers/userController.js"; // Added .js

const userRouter = express.Router();

userRouter.get('/data', userAuth, getUserData);

export default userRouter;