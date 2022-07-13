import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.js";

// NNUWwWMSnWf9SdlD
// mongodb+srv://studyproject:<password>@cluster0.alrnxue.mongodb.net/?retryWrites=true&w=majority

const app = express();

app.use(express.json());
//app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use("/users", userRouter); // http://localhost:4000/users/signup

const MONGODB_URL =
  "mongodb+srv://studyproject:NNUWwWMSnWf9SdlD@cluster0.alrnxue.mongodb.net/ecommerce_db?retryWrites=true&w=majority";

const port = 4000;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
