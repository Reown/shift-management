import { Request, Response, NextFunction } from "express";
import { verToken } from "../utils/auth.util";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token || token === "undefined") {
    res.status(401).json({ error: "Token is missing" });
    return;
  }
  try {
    const decoded = verToken(token);
    res.locals.person = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Token verification failed" });
  }
};

export const authRolesAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allowedRoles = ["admin"];
    if (!allowedRoles.includes(res.locals.user.role)) {
      throw "";
    }
    next();
  } catch (err) {
    res.status(403).json("access denied");
  }
};

export const authRolesManager = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allowedRoles = ["admin", "manager"];
    if (!allowedRoles.includes(res.locals.user.role)) {
      throw "";
    }
    next();
  } catch (err) {
    res.status(403).json("access denied");
  }
};
