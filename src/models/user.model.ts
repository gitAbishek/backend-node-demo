import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document {
  name: String;
  email: String;
  password: String;
}

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model<User>("User", UserSchema);
export default User;