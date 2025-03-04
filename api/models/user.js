import { connection } from "../core/database.js";
import { encryptPassword } from "../utils/hash.js";

class User {
  constructor() {
    this.db = connection;
  }

  // Create User
  async create(username, fullname, email, password) {
    try {
      const [results, ] = await this.db.execute(
        "INSERT INTO Users (username, fullname, emailaddress, password, created_at, updated_at) VALUES (?, ?, ?, ?, NOW(), NOW())",
        [username, fullname, email, encryptPassword(password)]
      );
      return results;
    } catch(err) {
      console.error("<error> user.create", err);
      throw err;
    }
  }

  // Verify user
  async verify(username, password) {
    try {
      const [results, ] = await this.db.execute(
        'SELECT * FROM Users WHERE username=? AND password=?',
        [username, encryptPassword(password)]
      );
      return results?.[0];
    } catch(err) {
        console.error("<error> user.verify", err);
        throw err;
    }
  }

  // Get user
  async get(username) {
    try{
      const [results, ] = await this.db.execute(
        "SELECT * FROM Users WHERE username=?",
        [username]
      );
      return results?.[0];
    } catch(err) {
        console.error("<error> user.get", err);
        throw err;
    }
  }

  // Update user
  async update(userId, username, fullname, email, password) {
    try {
      const [results, ] = await this.db.execute(
        "UPDATE Users SET username=?, fullname=?, emailaddress=?, password=?, updated_at=NOW() WHERE userId=?",
        [username, fullname, email, encryptPassword(password), userId]
      );
      return results;
    } catch(err) {
      console.error("<error> user.update", err);
    }
  }

  // Add cash to wallet 
  async deposit(username, amount) {
    try {
      const [results, ] = await this.db.execute(
        "UPDATE Users SET walletbalance=walletbalance+? WHERE username=?",
        [amount, username]
      );
      const user = await this.get(username);
      console.log(user);

      const [results1, ] = await this.db.execute(
        "INSERT INTO TransactionHistory (userId, type, amount) VALUES (?, ?, ?)",
        [user.userId, "deposit", amount]
      );

      
    } catch(err) {
      console.error("<error> user.deposit", err);
      throw err;
    }
  }
}

export default User;
