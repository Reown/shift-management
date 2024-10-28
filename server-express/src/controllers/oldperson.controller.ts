import { Request, Response } from "express";
import { oldPerson } from "../entities/oldperson.entity";
import { genSalt, hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;
    const username = data[0];
    const password = await hash(data[1], await genSalt(10));

    await oldPerson.insert({
      username: username,
      password: password,
      role: "user",
    });
    res.status(201).json("done");
  } catch (err) {
    res.status(500).json("server? error");
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;
    const username = data[0];

    const user = await oldPerson.findOneBy({ username });
    if (!user) {
      res.status(400).json("user not found");
      return;
    }

    const pwMatch = await compare(data[1], user.password);
    if (!pwMatch) {
      res.status(400).json("wrongpw");
      return;
    }

    const token = jwt.sign(
      { id: user.id, user: user.username, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );
    res.status(201).json(token);
  } catch (err) {
    res.status(500).json("server error");
  }
};

export const gettest = async (req: Request, res: Response): Promise<void> => {
  console.log(res.locals.user);
  console.log(res.locals.user.role);
  console.log(res.locals.user.user);
  res.status(201).json("welcome");
  return;
};
