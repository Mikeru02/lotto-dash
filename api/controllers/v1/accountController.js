import jwt from "jsonwebtoken";
import User from "../../models/user.js";

class AccountController() {
  constructor() {
    this.user = new User();
  }

  // Create account 
  async create(req, res) {
    try {
      const { username, password } = req.body || {};
      const response = await this.user.create(username, password);
      res.json({
        success: true,
        data: {
          userId: response?.userId,
          token: jwt.sign({ "username": username }, process.env.API_SECRET_KEY, {
            expiresIn: "1d",
          }),
        },
      });
      res.end();
    } catch(err) {
        res.json({
          success: false,
          message: err.toString(),
        });
        res.end();
    }
  }

  // Login account 
  async login(req, res) {
    try {
      const { username, password } = req.body || {};
      const response = await this.user.verify(username, password);
      if (!response.id) {
        return res.json({
          success: false,
          message: 'Invalid username or password!',
        });
      }
      res.json({
        success: true,
        data: {
          token: jwt.sign({ "username": username }, process.env.API_SECRET_KEY, {
            expiresIn: "1d",
          }),
        }
      });
      res.end();
    } catch(err) {
        res.json({
          success: false,
          message: err.toString(),
        });
        res.end();
    }
  }
}
