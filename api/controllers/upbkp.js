import mongoose from "mongoose";

const DataModel = mongoose.model(
  "DataModel",
  new mongoose.Schema({}, { strict: false })
);

export const uploadData = async (req, res) => {
  try {
    const data = req.body;
    await DataModel.create(data);
    res.status(200).json({ success: true, message: "Uploaded Successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
