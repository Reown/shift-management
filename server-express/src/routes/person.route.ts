import { Router } from "express";
import {
  getone,
  insert,
  remove,
  register,
  login,
  insertInfo,
} from "../controllers/person.controller";
import { verifyToken } from "../middlewares/auth.middleware";

const router = Router();

router.route("/insert").post(insert);
router.route("/remove/:id").delete(remove);
router.route("/getone/:id").get(getone);

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/insertinfo").post(verifyToken, insertInfo);

export default router;
