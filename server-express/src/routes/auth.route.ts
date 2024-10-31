import { Router } from "express";
import { createToken } from "../controllers/auth.controller";

const router = Router();

router.route("/createtoken").post(createToken);
router.route("/changepass/:email").patch();

export default router;
