import { Router } from "express";
import {
  getone,
  insert,
  remove,
  register,
} from "../controllers/person.controller";

const router = Router();

router.route("/insert").post(insert);
router.route("/remove/:id").delete(remove);
router.route("/getone/:id").get(getone);

router.route("/register").post(register);

export default router;
