import { Router } from "express";

import accountRouter from "./accountRouter.js";
import drawRouter from "./drawRouter.js";
import router from "./router.js";

const v1 = new Router();

v1.use("/account", accountRouter);
v1.use("/draw", drawRouter);
v1.use("/", router)

export default v1;