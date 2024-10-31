import { Router } from "express";
import { createToken } from "../middlewares/auth.middleware";

const router = Router();

router.route("/createtoken").post(createToken);

export default router;
