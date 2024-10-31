import { Request, Response } from "express";
import { getEntityManager } from "../config/entity-manager";
import { Person } from "../entities/person.entity";
import { newToken } from "../helpers/auth.helper";

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
        return;
      }
      const token = newToken(email, role.role);
      res.status(201).json(token);
    }
  } catch (err) {
    res.status(500);
  }
};

export const changePass = async (req: Request, res: Response) => {};
