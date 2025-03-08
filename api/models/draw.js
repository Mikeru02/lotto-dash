import { connection } from "../core/database.js";

class Draw {
  constructor() {
    this.db = connection;
  }

  async create(numbers, prize) {
    try {
      const [results, ] = await this.db.execute(
        "INSERT INTO DrawHistory (drawDate, winningNumber, prizeMoney) VALUES (NOW(), ?, ?)",
        [numbers, prize]
      )
      return results;
    } catch(err) {
      console.error("<error> draw.create", err);
      throw err;
    }
  }

  async get(drawId) {
    try {
      const [results, ] = await this.db.execute(
        "SELECT * FROM DrawHistory WHERE drawId=?",
        [drawId] 
      );
      return results;
    } catch(err) {
      console.error("<error> draw.get", err);
      throw err;
    }
  }
}

export default Draw;