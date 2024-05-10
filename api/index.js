import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import uploadRoute from "./routes/upload.js";

dotenv.config();
const port = process.env.PORT || 8000;

const app = express();

const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("Api working");
});

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected");
  } catch (err) {
    console.log("DB connection failed" + err);
  }
};

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/memberlist", uploadRoute);

app.listen(port, () => {
  connectDB();
  console.log("Server on port " + port);
});
