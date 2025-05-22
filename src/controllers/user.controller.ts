import { Request, Response } from "express";
import { userService } from "../services/user.service";

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await userService.getUsers();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getUsersById = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await userService.getUsersById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const updateUsersById = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await userService.updateUsersById(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const userController = {
  getUsers,
  getUsersById,
  updateUsersById,
};
