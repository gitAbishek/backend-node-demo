import express from "express";
import { userController } from "../../controllers/user.controller";
import authenticate from "../../middlewares/auth.middleware";

const userRouter = express.Router();

userRouter.get("/lists", authenticate, userController.getUsers);
userRouter.get("/:id", authenticate, userController.getUsersById);
userRouter.put("/:id", authenticate, userController.updateUsersById);


export default userRouter;
