import { Request, Response } from "express";
import { authServices } from "../services/auth.service";
const userRegister = async (req: Request, res: Response): Promise<any> => {
  try {
    const result = await authServices.registerUser(req.body);
    return res.status(201).json(result);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

const userLogin = async (req: Request, res: Response): Promise<any> => {
  try {
    const result = await authServices.loginUser(req.body);
    return res.status(200).json(result);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const authController = {
  userRegister,
  userLogin,
};
