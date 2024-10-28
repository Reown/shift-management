/*
import { Router, Request, Response } from "express";
import { Task, dTask } from "../entities/task";

const router = Router();
let tasks: Task[] = [];

// Add your CRUD API implementation here

export default router;

router.post("/", (req: Request, res: Response) => {
  const task: Task = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    completed: false,
  };

  tasks.push(task);
  res.status(201).json(task);
});

router.get("/", (req: Request, res: Response) => {
  res.json(req.body);
});

router.get("/:id", (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));

  if (!task) {
    res.status(404).send("Task not found 1");
  } else {
    res.json(task);
  }
});

router.put("/:id", (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));

  if (!task) {
    res.status(404).send("Task not found 2");
  } else {
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.completed = req.body.completed || task.completed;

    res.json(task);
  }
});

router.delete("/:id", (req: Request, res: Response) => {
  const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));

  if (index === -1) {
    res.status(404).send("Task not found 3");
  } else {
    tasks.splice(index, 1);
    res.status(204).send();
  }
});

*/
import { Router } from "express";
import {
  tasks,
  onetask,
  newtask,
  oncomplete,
  remove,
} from "../controllers/task.controller";

const router: Router = Router();

router.route("/").get(tasks);
router.route("/:id").get(onetask);
router.route("/new").post(newtask);
router.route("/complete/:id").put(oncomplete);
router.route("/remove/:id").delete(remove);

export default router;
