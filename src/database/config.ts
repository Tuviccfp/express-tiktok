import mongoose from "mongoose";

// Connect to MongoDB
export const connectDB = async () => {
    mongoose.connect(process.env.DATABASE_URL as string, {}).then(() => {
        console.log("Connected to MongoDB");
    }).catch(() => {
        console.error("Failed to connect to MongoDB");
        process.exit(1);
    })
}