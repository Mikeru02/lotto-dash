import { Router } from "express";
import AccountController from "../../controllers/v1/accountController.js";
import authorization from "../../middlewares/authorization.js";
import authenticatioon from "../../middlewares/authentication.js";

const accountRouter = new Router();
const account = new AccountController();

accountRouter.use(authorization);

// Get Methods

// Post Methods


export default accountRouter;
