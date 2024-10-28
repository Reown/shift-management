import { Router } from "express";
import { gettest, login, register } from "../controllers/oldperson.controller";
import {
  verifyToken,
  authRolesAdmin,
  authRolesManager,
} from "../middlewares/auth.middleware";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/gettest").get(verifyToken, authRolesAdmin, gettest);

export default router;
