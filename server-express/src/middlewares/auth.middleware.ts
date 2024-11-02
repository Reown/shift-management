import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token || token === "undefined") {
      res.status(401).json({ error: "Token is missing" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    res.locals.person = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "JWT Error" });
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
