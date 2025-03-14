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

  async updateTranscation(userId, type, drawId, amount) {
    try {
      const [results, ] = await this.db.execute(
        "INSERT INTO TransactionHistory (userId, type, drawId, amount, transactionDate) VALUES (?, ?, ?, ?, NOW())",
        [userId, type, drawId, amount]
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

      const transaction = await this.updateTranscation(user.userId, "deposit", null, amount);

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

      const transaction = await this.updateTranscation(user.userId, "withdraw", null, amount);

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

  async bet(username, betNumbers) {
    try {
      const user = await this.get(username);
      const [result, ] = await this.db.execute(
        "UPDATE Users SET walletBalance=walletBalance-? WHERE username=?",
        [20, username]
      );

      const [lastdata, ] = await this.db.execute(
        "SELECT * FROM DrawHistory ORDER BY drawId DESC LIMIT 1 OFFSET 0",
      );

      const data = lastdata?.[0];

      const transaction = await this.updateTranscation(user.userId, "bet", data.drawId, 20.00);

      const [betTransac, ] = await this.db.execute(
        "INSERT INTO BetHistory (userId, drawId, betNumbers, betDate) VALUES (?, ?, ?, NOW())",
        [user.userId, data.drawId, betNumbers]
      );
      
      return transaction;
    } catch(err) {
      console.error("<error> user.bet", err);
      throw err;
    }
  }

  // Get wallet balance
  async getWalletBalance(username) {
    try {
      const [results, ] = await this.db.execute(
        "SELECT walletBalance FROM Users WHERE username=?",
        [username]
      );
      return results?.[0];
    } catch(err) {
      console.error("<error> user.getWalletBalance", err);
      throw err;
    }
  }

  // Update wallet balance
  async updateWalletBalance(username, amount) {
    try {
      console.log("<debug api user.updateBalance>", amount, username)
      const [results, ] = await this.db.execute(
        "UPDATE Users SET walletBalance=? WHERE username=?",
        [amount, username]
      );
      return results;
    } catch(err) {
      console.error("<error> user.updateWalletBalance", err);
      throw err;
    }
  }
}

export default User;
