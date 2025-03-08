import { Router } from "express";

import accountRouter from "./accountRouter.js";
import drawRouter from "./drawRouter.js";

const v1 = new Router();

v1.use("/account", accountRouter);
v1.use("/draw", drawRouter);

export default v1;