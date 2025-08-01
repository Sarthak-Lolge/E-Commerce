import express from "express";
import { userLogin, userSignUp, admin } from '../controllers/user.controller.js';


const userRouter = express.Router();

userRouter.post("/register", userSignUp);
userRouter.post("/login", userLogin);
userRouter.post("/admin", admin);

export default userRouter;
