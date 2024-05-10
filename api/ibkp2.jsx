import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import xlsx from "xlsx";

dotenv.config();
const port = process.env.PORT || 8000;

const app = express();

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("Api working");
});

//DATABASE
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

// Mongoose model
const MyModel = mongoose.model(
  "MyModel",
  new mongoose.Schema({
    name: String,
    email: String,
  })
);

// Upload endpoint
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);

    await MyModel.insertMany(data);
    res.status(200).send("File uploaded and saved to database");
  } catch (err) {
    console.error("Error saving to database:", err);
    res.status(500).send("Error saving to database");
  }
});

app.listen(port, () => {
  connectDB();
  console.log("Server on port " + port);
});
