import { Router } from "express";
import { createToken, getTokenRole } from "../controllers/auth.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = Router();

router.route("/createtoken").post(createToken);
router.route("/gettokenrole").get(verifyToken, getTokenRole);

export default router;
