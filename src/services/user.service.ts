import User from "../models/user.model";

const getUsers = async () => {
  const users = await User.find().select("-password");
  return users;
};

export const userService = {
  getUsers,
};
