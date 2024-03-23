import dotenv from "dotenv"
import connectDB from "./db/db.js";

dotenv.config({
    path: './env'
})
connectDB()

























// import mongoose from "mongoose";
// // import { DB_NAME } from "./constants";

/*import express from "express";
const app = express()
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", () => {
      console.error("ERROR:", error);
      throw err;
    });

    app.listen(process.env.Port,() => {
        console.log(`App is Listening on port $
        {process.env,PORT}`);
    })
  } catch (error) {
    console.error("ERROR:", error);
    throw err;
  }
})
(); */