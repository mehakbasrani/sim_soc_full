import mongoose from "mongoose";

const UploadDataSchema = new mongoose.Schema({
  SEQNO: { type: Number },
  TITLE: { type: String },
  FULLNAME: { type: String },
  TotalAmount: { type: Number },
  PrincipalBalance: { type: Number },
  Role: { type: String },
  ISACTIVE: { type: Boolean },
  UNITTYPE: { type: String },
  FLATNO: { type: Number },
  BILLCODE: { type: Number },
  UNITAREA: { type: Number },
  AREAUNIT: { type: String },
  MOBILE1: { type: Number },
  EMAILID: { type: String },
  APPLYGST: { type: Boolean },
  ISSUEBILL: { type: Boolean },
  SENDEMAIL: { type: Boolean },
  SENDSMS: { type: Boolean },
  USERLOGIN: { type: Number },
});

export default mongoose.model("UploadedData", UploadDataSchema);
