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
        "INSERT INTO users(username, fullname, emailaddress, password, created_at, updated_at) VALUES (?, ?, ?, ?, NOW(), NOW())",
        [username, fullname, email, encryptPassword(password)]
      );
      console.log(encryptPassword(password));
      return results
    } catch(err) {
      console.error("<error> user.create", err);
      throw err;
    }
  }

  // Verify user
  async verify(username, password) {
    try {
      const [results, ] = await this.db.execute(
        'SELECT * FROM users WHERE username=? AND password=?',
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
        "SELECT * FROM users WHERE username=?",
        [username]
      );
      return results?.[0];
    } catch(err) {
        console.error("<error> user.get", err);
        throw err;
    }
  }

  // Update user
  async update(username, fullname, email, password) {
    const [results, ] = await this.db.execute(
      "UPDATE users SET username=?, fullname=?, emailaddress=?, password=?, updated_at=NOW()",
      [username, fullname, email, encryptPassword(password)]
    )
  }
}

export default User;
