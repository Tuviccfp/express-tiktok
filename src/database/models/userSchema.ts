import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface UserSchema {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<UserSchema>({
  username: {
    type: String,
    required: true,
    unique: true,
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
    onUpdate: Date.now,
  }
});

export const User = mongoose.model<UserSchema>("User", userSchema);

export const hash = async (pass: string): Promise<string> => {
    return bcrypt.hash(pass, await bcrypt.genSalt(10));
}

export const compare = async (pass: string, hashedPass: string): Promise<boolean> => {
    return bcrypt.compare(pass, hashedPass);
}