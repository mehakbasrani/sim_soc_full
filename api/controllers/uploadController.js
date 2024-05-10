import UploadedData from "../models/UploadDataSchema.js";

export const uploadData = async (req, res) => {
  const {
    SEQNO,
    TITLE,
    FULLNAME,
    TotalAmount,
    PrincipalBalance,
    Role,
    ISACTIVE,
    UNITTYPE,
    FLATNO,
    BILLCODE,
    UNITAREA,
    AREAUNIT,
    MOBILE1,
    EMAILID,
    APPLYGST,
    ISSUEBILL,
    SENDEMAIL,
    SENDSMS,
    USERLOGIN,
  } = req.body;

  let data = new UploadedData({
    SEQNO,
    TITLE,
    FULLNAME,
    TotalAmount,
    PrincipalBalance,
    Role,
    ISACTIVE,
    UNITTYPE,
    FLATNO,
    BILLCODE,
    UNITAREA,
    AREAUNIT,
    MOBILE1,
    EMAILID,
    APPLYGST,
    ISSUEBILL,
    SENDEMAIL,
    SENDSMS,
    USERLOGIN,
  });
  console.log(data);
  try {
    await data.save();
    res.status(200).json({ success: true, message: "Uplaoded Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
