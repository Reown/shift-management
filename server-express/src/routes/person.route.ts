import { Router } from "express";
import { getone, insert, remove } from "../controllers/person.controller";

const router = Router();

router.route("/insert").post(insert);
router.route("/remove/:id").delete(remove);
router.route("/getone/:id").get(getone);

export default router;
