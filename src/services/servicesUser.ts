import { hash, User, type UserSchema } from "../database/models/userSchema";

export const createUser = async (user: UserSchema) => {
    const newUser = new User({
        username: user.username,
        email: user.email,
        password: hash(user.password),
        createdAt: new Date(),
    })
    return await newUser.save();
}

export const getUserByUserName = async (username: string) => {
    try {
        const searchUserName = await User.findOne({ username });
        return searchUserName;
    } catch (error) {
        throw new ErrorEvent("Unable to find user by username");
    }
}

export const getUserByEmail = async (email: string) => {
    try {
        const searchEmail = await User.findOne({ email });
        return searchEmail;
    } catch (error) {
        throw new ErrorEvent("Unable to find user by email");
    }
}

export const updateUser = async (id: string, updatedUser: UserSchema) => {
    try {
        const updateUser = await User.findByIdAndUpdate(id, updatedUser, { new: true });
        return updateUser;
    } catch (error) {
        throw new ErrorEvent("Unable to update user");
    }
}

export const deleteUser = async (id: string) => {
    try {
        const deleteUser = await User.findByIdAndDelete(id);
        return deleteUser;
    } catch (error) {
        throw new ErrorEvent("Unable to delete user");
    }
}
