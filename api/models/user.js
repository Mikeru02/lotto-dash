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

  async updateTranscation(userId, type, amount) {
    try {
      const [results, ] = await this.db.execute(
        "INSERT INTO TransactionHistory (userId, type, amount, transactionDate) VALUES (?, ?, ?, NOW())",
        [userId, type, amount]
      );
      return results.insertId;
    } catch(err) {
      console.error("<error> user.updateTranscation", err);
      throw err;
    }
  }

  // Add cash to wallet 
  async deposit(username, amount) {
    try {
      const user = await this.get(username);

      const [results, ] = await this.db.execute(
        "UPDATE Users SET walletbalance=walletbalance+? WHERE username=?",
        [amount, username]
      );

      const transaction = await this.updateTranscation(user.userId, "deposit", amount);

      return transaction;
      
    } catch(err) {
      console.error("<error> user.deposit", err);
      throw err;
    }
  }

  // Get all deposits of user
  async getDeposits(username) {
    try {
      const user = await this.get(username);
      const [results, ] = await this.db.execute(
        "SELECT transactionId, amount, transactionDate FROM TransactionHistory WHERE type=? AND userId=?",
        ["deposit", user.userId]
      );
      return results;
    } catch(err) {
      console.error("<error> user.getDeposit", err);
      throw err;
    }
  }

  // Withdraw cash to wallet
  async withdraw(username, amount) {
    try {
      const user = await this.get(username);
      const [results, ] = await this.db.execute(
        "UPDATE Users SET walletbalance=walletbalance-? WHERE username=?",
        [amount, username]
      );

      const transaction = await this.updateTranscation(user.userId, "withdraw", amount);

      return transaction;
    } catch(err) {
      console.error("<error> user.withdraw", err);
      throw err;
    }
  }

  // Get withdrawals of user
  async getWithdrawals(username) {
    try {
      const user = await this.get(username);
      const [results, ] = await this.db.execute(
        "SELECT transactionId, amount, transactionDate FROM TransactionHistory WHERE type=? AND userId=?",
        ["withdraw", user.userId]
      );
      return results;
    } catch(err) {
      console.error("<error> user.getDeposit", err);
      throw err;
    }
  }
}

export default User;
