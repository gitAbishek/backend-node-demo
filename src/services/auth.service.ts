import bcrypt from "bcrypt";
import User from "../models/user.model";
import { generateToken } from "../utils/generateToken";

interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

interface LoginInput {
  email: string;
  password: string;
}

const registerUser = async ({ name, email, password }: RegisterInput) => {
  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  return { message: "User registered successfully" };
};

const loginUser = async ({ email, password }: LoginInput) => {
  if (!email || !password) {
    throw new Error("All fields are required");
  }

  const user = (await User.findOne({ email })) as typeof User.prototype & {
    _id: any;
  };

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, String(user.password));

  if (!isPasswordValid) {
    return { message: "Invalid password" };
  }

  const token = generateToken(user._id.toString());

  return {
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  };
};

export const authServices = {
  registerUser,
  loginUser,
};
