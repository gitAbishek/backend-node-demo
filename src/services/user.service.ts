import User from "../models/user.model";

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
