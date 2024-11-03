import { Request, Response } from "express";
import { getEntityManager } from "../config/entity-manager";
import { Person } from "../entities/person.entity";
import { newToken } from "../utils/auth.util";

export const createToken = async (req: Request, res: Response) => {
  try {
    const entityManager = await getEntityManager();
    const data = req.body;
    const email = data[0];

    const getPerson = await entityManager.findOne(Person, {
      where: { email: email },
      relations: ["role"],
    });
    if (!getPerson) {
      res.status(404).json({ error: "Email not found" });
      return;
    }
    if (!getPerson.role) {
      res.status(404).json({ error: "Role not found" });
      return;
    }

    const token = newToken(getPerson.email, getPerson.role.role);
    if (!token) {
      res.status(500).json({ error: "Token creation failed" });
      return;
    }
    res.status(201).json(token);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getTokenRole = async (req: Request, res: Response) => {
  try {
    res.status(200).json(res.locals.person.role);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
