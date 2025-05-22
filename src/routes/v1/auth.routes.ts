import express, { Request, Response } from "express";
import { authController } from "../../controllers/auth.controller";

const authRouter = express.Router();

authRouter.post("/register", authController.userRegister);
authRouter.post("/login", authController.userLogin);

export default authRouter;
