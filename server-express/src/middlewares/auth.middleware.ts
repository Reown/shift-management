import { Request, Response, NextFunction } from "express";
import { getEntityManager } from "../config/entity-manager";
import { Person } from "../entities/person.entity";
import { newToken } from "../helpers/auth.helper";
import jwt from "jsonwebtoken";

export const createToken = async (req: Request, res: Response) => {
  try {
    const entityManager = await getEntityManager();
    const data = req.body;
    const email = data[0];

    const getPerson = await entityManager.findOne(Person, {
      where: { email: email },
      relations: ["role", "info"],
    });

    if (getPerson) {
      const { email, role, info } = getPerson;
      if (info === null) {
        res.status(400).json({ error: "Info not found" });
      }
      const token = newToken(email, role.role);
      res.status(201).json(token);
    }
  } catch (err) {
    res.status(500);
  }
};

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
