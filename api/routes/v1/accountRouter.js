import { Router } from "express";
import AccountController from "../../controllers/v1/accountController.js";
import authorization from "../../middlewares/authorization.js";
import authentication from "../../middlewares/authentication.js";

const accountRouter = new Router();
const account = new AccountController();

accountRouter.use(authorization);

// Get Methods
accountRouter.get("/", authentication, account.profile.bind(account));

// Post Methods
accountRouter.post("/login", account.login.bind(account));
accountRouter.post("/", account.create.bind(account));

// Patch Methods
accountRouter.patch("/", account.update.bind(account));

export default accountRouter;
