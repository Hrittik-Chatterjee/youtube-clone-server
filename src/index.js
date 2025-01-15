// require("dotenv").config();

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("Server error:", error);
      throw error;
    });
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })

  .catch((err) => console.log("Error connecting to MongoDB:", err));

dotenv.config({
  path: "./env",
});
