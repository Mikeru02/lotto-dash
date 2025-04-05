import { Router } from "express";
import authorization from "../../middlewares/authorization.js";

const router = new Router();

router.use(authorization);

router.get("/", (req, res) => {
    res.json({
        success:true,
        message: "Hello from api server"
    });
    res.end();
})

export default router;