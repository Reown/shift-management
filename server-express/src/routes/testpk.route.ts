import { Router } from "express";
import {
  basicinsert,
  findProfileByUserId,
} from "../controllers/testkpk.controller";
const router = Router();

router.route("/insert").post(basicinsert);
router.route("/get/:id").get(findProfileByUserId);

export default router;
