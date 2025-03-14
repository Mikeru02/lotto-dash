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

  async update(drawId, winningNumber, prizeMoney) {
    try {
      const [result, ] = await this.db.execute(
        "UPDATE DrawHistory SET winningNumber=?, prizeMoney=? WHERE drawId=?",
        [winningNumber, prizeMoney, drawId]
      );
      return result;
    } catch(err) {
      console.error("<error> draw.update", err);
      throw err;
    }
  }

  async getLastData(offset){
    try {
      const [result, ] = await this.db.execute(
        "SELECT * FROM DrawHistory ORDER BY drawId DESC LIMIT 1 OFFSET ?",
        [offset]
      );
      return result?.[0];
    } catch(err) {
      console.error("<error> draw.getLastData", err);
      throw err;
    }
  }
}

export default Draw;