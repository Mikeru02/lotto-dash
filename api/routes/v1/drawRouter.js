import { Router } from "express";
import DrawController from "../../controllers/v1/drawController.js";
import authorization from "../../middlewares/authorization.js";

const drawRouter = new Router();
const draw = new DrawController();

drawRouter.use(authorization)

// Get Methods
drawRouter.get("/", draw.get.bind(draw));
drawRouter.get("/lastdraw", draw.getLastData.bind(draw));

// Post Methods
drawRouter.post("/", draw.create.bind(draw));
drawRouter.post("/winner", draw.payout.bind(draw));

// Patch Methods
drawRouter.patch("/", draw.updateDraw.bind(draw));

export default drawRouter;