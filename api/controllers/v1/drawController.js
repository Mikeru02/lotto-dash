import Draw from "../../models/draw.js";

class DrawController {
  constructor() {
    this.draw = new Draw();
  }

  async create(req, res) {
    try {
      const { winningNumber, prizeMoney } = req.body || {};
      const response = await this.draw.create(winningNumber, prizeMoney);
      res.json({
        success: true,
        data: {
          drawId: response?.insertId
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

  async get(req, res) {
    try {
      const { drawId } = req.body || {};
      const response = this.draw.get(drawId);
      res.json({
        success: true,
        response
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

  async updateDraw(req, res) {
    try {
      const { drawId, winningNumber, prizeMoney } = req.body || {};
      console.log(req.body)
      const response = this.draw.update(drawId, winningNumber, prizeMoney);
      res.json({
        success: true,
        response
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

  async getLastData(req, res) {
    try {
      console.log(req.query)
      const response = await this.draw.getLastData(req.query.offset);
      res.json({
        success: true,
        response
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

export default DrawController;