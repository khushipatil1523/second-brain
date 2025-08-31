import dotenv from "dotenv";
dotenv.config();

export const JWT_PASSWORD = process.env.JWT_PASSWORD as string;
export const MONGODB_URI = process.env.MONGODB_URI as string;
