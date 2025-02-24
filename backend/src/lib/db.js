import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB connect: ${conn.connection.host}`);
  } catch (error) {
    console.log("MOngoDB connection error:", error);
  }
}; 