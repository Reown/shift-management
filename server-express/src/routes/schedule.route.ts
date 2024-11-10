import { Router } from "express";
import { getSchedule, submitBid } from "../controllers/schedule.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = Router();

router.route("/getschedule").get(getSchedule);
router.route("/submitbid").post(verifyToken, submitBid);

export default router;
