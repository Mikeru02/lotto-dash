import crypto from "crypto";

export function encryptPassword(password) {
  console.log("SECRET KEY", process.env.API_SECRET_KEY);
  return crypto.createHmac('sha256', process.env.API_SECRET_KEY)
  .update(password)
  .digest('hex');
};
