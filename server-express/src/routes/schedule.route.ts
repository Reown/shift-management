import { Router } from "express";
import { getSchedule, bid } from "../controllers/schedule.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = Router();

router.route("/getschedule").get(getSchedule);
router.route("/bid").post(bid);

export default router;
