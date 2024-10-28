import { Request, Response } from "express";
import { Task, dTask } from "../entities/task.entity";

export const tasks = async (req: Request, res: Response): Promise<void> => {
  const data: dTask[] = await Task.find();
  res.status(200).json(data);
};

export const onetask = async (req: Request, res: Response): Promise<void> => {
  const id: number = parseInt(req.params.id);
  try {
    const t = await Task.findOneBy({ id });
    if (!t) {
      throw "Task not found";
    }
    res.status(200).json(t);
  } catch (err) {
    res.status(404).json(err);
  }
};

export const newtask = async (req: Request, res: Response): Promise<void> => {
  const data = req.body;
  await Task.insert({
    title: data[0],
    description: data[1],
    completed: false,
  });
  res.status(201).json("done");
};

export const oncomplete = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id: number = parseInt(req.params.id);
  try {
    const t = await Task.findOneBy({ id });
    console.log("a");
    if (!t) {
      throw "Task not found";
    }
    t!.completed = !t!.completed;
    await t.save();
    res.status(200).json(t);
  } catch (err) {
    res.status(404).json(err);
  }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
  const id: number = parseInt(req.params.id);
  try {
    const t = await Task.findOneBy({ id });
    if (!t) {
      throw "Task not found";
    }
    await Task.delete({ id });
    res.status(200).json("deleted task " + t.id);
  } catch (err) {
    res.status(404).json(err);
  }
};
