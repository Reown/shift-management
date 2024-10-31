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
      throw "bruh no token";
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    res.locals.user = decoded;
    next();
  } catch (err) {
    res.status(400).json("jwt error" + err);
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
