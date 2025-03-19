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
      return results?.[0];
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
        `SELECT * FROM DrawHistory ORDER BY drawId DESC LIMIT 1 OFFSET ${offset}`,
        []
      );
      return result?.[0];
    } catch(err) {
      console.error("<error> draw.getLastData", err);
      throw err;
    }
  }

  async winner(username) {
    try {
      const lastdata = await this.getLastData(0);
      console.log(lastdata)

      const [user, ] = await this.db.execute(
        "SELECT * FROM Users WHERE username=?",
        [username]
      )
      const userData = user?.[0];
      console.log(userData)

      const [bet, ] = await this.db.execute(
        "SELECT * FROM BetHistory WHERE userId=? ORDER BY betId DESC LIMIT 1 OFFSET 0",
        [userData.userId]
      )
      const betData = bet?.[0];
      console.log(betData)

      const [result,] = await this.db.execute(
        "INSERT INTO Winners (userId, drawId, betId) VALUES (?, ?, ?)",
        [userData.userId, lastdata.drawId, betData.betId]
      );

      const [payout, ] = await this.db.execute(
        "UPDATE Users SET walletBalance=walletBalance+? WHERE userId=?",
        [lastdata.prizeMoney, userData.userId]
      )
    }catch(err) {
    console.error("<error> draw.winner", err);
    throw err;
    }
  }
}

export default Draw;