import { Router } from "express";
import { createToken } from "../controllers/auth.controller";

const router = Router();

router.route("/createtoken").post(createToken);

export default router;
