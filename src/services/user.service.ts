import User from "../models/user.model";
import mongoose from "mongoose";

interface UserInput {
  email: string;
  password: string;
}

const getUsers = async () => {
  const users = await User.find().select("-password");
  return users;
};

const getUsersById = async (id: string) => {
  const user = await User.findById(id).select("-password");
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

const updateUsersById = async (id: string, body: UserInput) => {
  if (!mongoose.isValidObjectId(id)) {
    throw new Error("Invalid user ID");
  }
  if (body.email) {
    const existingUser = await User.findOne({ email: body.email });
    if (existingUser && (existingUser as { _id: any })._id.toString() !== id) {
      throw new Error("Email already in use");
    }
  }
  const updatedUser = await User.findByIdAndUpdate(id, body, {
    new: true,
  }).select("-password");
  if (!updatedUser) {
    throw new Error("User not found");
  }
  return updatedUser;
};

export const userService = {
  getUsers,
  getUsersById,
  updateUsersById,
};
