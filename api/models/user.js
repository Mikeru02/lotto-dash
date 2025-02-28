import { connection } from "../core/database.js";

class User() {
  constructor() {
    this.db = connection;
  }

  // Create User
  async create(username, password) {
    try {

    } catch(err) {
      console.error("<error> user.create", err);
      throw err;
    }
  }

  // Login user
  async verify(username, password) {
    try {
      
    } catch(err) {
        console.error("<error> user.verify", err);
        throw err;
    }
  }
}
