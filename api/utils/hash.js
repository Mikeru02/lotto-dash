import crypto from "crypto";

export default function encryptPassword(password) {
  return crypto.createHmac("sha256", process.env.API_SECRET_KEY)
  .update(password)
  .digest("hex")
};
