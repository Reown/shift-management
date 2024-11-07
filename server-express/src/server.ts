import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import taskRoutes from "./routes/tasks.route";
import oldPersonRoutes from "./routes/oldperson.route";
import testpkRoutes from "./routes/testpk.route";
import personRoutes from "./routes/person.route";
import scheduleRoutes from "./routes/schedule.route";
import authRoutes from "./routes/auth.route";

const main = async (): Promise<void> => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  const port = process.env.DB_PORT;

  app.use("/api/task", taskRoutes);
  app.use("/api/oldperson", oldPersonRoutes);
  app.use("/api/testpk", testpkRoutes);
  app.use("/api/person", personRoutes);
  app.use("/api/schedule", scheduleRoutes);
  app.use("/api/auth", authRoutes);

  //app.get("/", (req: Request, res: Response) => {
  //res.send("Hello, Ttestdss!");
  //});

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong");
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
};

main().catch((err) => {
  console.log(err);
});
