import jwt from "jsonwebtoken";
import User from "../../models/user.js";

class AccountController {
  constructor() {
    this.user = new User();
  }

  // Create account 
  async create(req, res) {
    try {
      const { username, fullname, email, password } = req.body || {};
      const response = await this.user.create(username, fullname, email, password);
      res.json({
        success: true,
        data: {
          userId: response?.insertId,
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
      if (!response.userId) {
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

  // Profile
  async profile(req, res) {
    try {
      const userDetails = await this.user.get(res.locals.username);
      res.json({
        success: true,
        data: {
          username: userDetails?.username,
          fullname: userDetails?.fullname,
          email: userDetails?.email,
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

  // Update profile
  async update(req, res) {
    try {
      const { username, fullname, email, password } = req.body || {};
      const currentData = await this.user.get(res.locals.username);
      const upUsername = username ?? currentData.username;
      const upFullname = fullname ?? currentData.fullname;
      const upEmail = email ?? currentData.emailaddress;
      const upPassword = password ?? currentData.password;
      // console.log("username", upUsername, "fullname", upFullname, "email", upEmail, "pass", upPassword);
      const response = await this.user.update(currentData.userId, upUsername, upFullname, upEmail, upPassword);
      
      if (response?.affectedRows > 0) {
        res.json({
          success: true,
          message: "Profile updated succesfully"
        });
      } else {
        res.json({
          success: false,
          message: "Profile update failed"
        });
      }
      res.end();

    } catch(err) {
      res.json({
        success: false,
        message: err.toString(),
      });
      res.end();
    }
  }

  // Cash in simulation
  async deposit(req, res) {
    try {
      const { amount } = req.body || {};
      const response = await this.user.deposit(res.locals.username, amount);
    } catch(err) {
      res.json({
        success: false,
        message: err.toString(),
      });
      res.end();
    }
  }
}

export default AccountController;
