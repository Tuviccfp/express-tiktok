import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB, } from './database/config';
dotenv.config();

const app = express();
const allowedOrigins = ["*", "http://localhost:3000"];

app.use(cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    origin(requestOrigin, callback) {
        if(!requestOrigin || allowedOrigins.includes(requestOrigin)) {
            callback(null, true);
        } else {
            callback(new Error("Origin not allowed"), false);
        }
    }
}));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    connectDB();
});
