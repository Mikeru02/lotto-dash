import { Router } from "express";
import AccountController from "../../controllers/v1/accountController.js";
import authorization from "../../middlewares/authorization.js";
import authentication from "../../middlewares/authentication.js";

const accountRouter = new Router();
const account = new AccountController();

accountRouter.use(authorization);

// Get Methods
accountRouter.get("/", authentication, account.profile.bind(account));
accountRouter.get("/balance", authentication, account.getWalletBalance.bind(account));
accountRouter.get("/deposit", authentication, account.getDeposit.bind(account));
accountRouter.get("/withdraw", authentication, account.getWithdrawwal.bind(account));

// Post Methods
accountRouter.post("/login", account.login.bind(account));
accountRouter.post("/", account.create.bind(account));
accountRouter.post("/deposit", authentication, account.deposit.bind(account));
accountRouter.post("/withdraw", authentication, account.withdraw.bind(account));

// Patch Methods
accountRouter.patch("/", authentication, account.update.bind(account));
accountRouter.patch("/balance", authentication, account.updateWalletBalance.bind(account));

export default accountRouter;
