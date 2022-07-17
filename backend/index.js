import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.js";

const app = express();
dotenv.config();


app.use(express.json());
app.use(cors());

app.use("/users", userRouter); // http://localhost:4000/users/signup

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
