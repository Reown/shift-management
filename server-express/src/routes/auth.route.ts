import { Router } from "express";
import { createToken, changePass } from "../controllers/auth.controller";

const router = Router();

router.route("/createtoken").post(createToken);
router.route("/changepass/:email").patch(changePass);

export default router;
