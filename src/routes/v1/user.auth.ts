import express from "express";
import { userController } from "../../controllers/user.controller";
import authenticate from "../../middlewares/auth.middleware";

const userRouter = express.Router();

userRouter.get("/lists", authenticate, userController.getUsers);

export default userRouter;
