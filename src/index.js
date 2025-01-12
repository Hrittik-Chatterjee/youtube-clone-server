// require("dotenv").config();

import dotenv from "dotenv";
import connectDB from "./db/index.js";

connectDB();

dotenv.config({
  path: "./env",
});

// import express from "express";

/*
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("Connected to MongoDB");
    app.on("error", (error) => {
      console.error("Server error:", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
})(); */
