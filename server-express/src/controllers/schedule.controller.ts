import { Request, Response } from "express";
import { getEntityManager } from "../config/entity-manager";
import { Schedule } from "../entities/schedule.entity";

export const getSchedule = async (req: Request, res: Response) => {
  try {
    const entityManager = await getEntityManager();
    //const email = res.locals.person.email;
    const email = 99;

    const getFull = await entityManager
      .createQueryBuilder(Schedule, "schedule")
      .innerJoinAndSelect("schedule.shift", "shift")
      .innerJoinAndSelect("schedule.day", "day")
      .innerJoinAndSelect("schedule.person", "person")
      .innerJoinAndSelect("person.info", "info")
      .where("person.email = :email", { email })
      .orderBy("day.full_date", "ASC")
      .orderBy("shift.id", "ASC")
      .getMany();

    const sorta: any = {};
    getFull.forEach((schedule) => {
      const first_name = schedule.person.info.firstname;
      const full_date = schedule.day.full_date.toLocaleString();
      const shift_name = schedule.shift.shift_name;

      if (!sorta[first_name]) {
        sorta[first_name] = {};
      }
      if (!sorta[first_name][full_date]) {
        sorta[first_name][full_date] = [];
      }
      sorta[first_name][full_date].push(shift_name);
    });
    /*
    sorta.forEach((entry: any) => {
      console.log(`${entry[0]} is working on ${entry[1]} on ${entry[2]}`);
    });
    */
    console.log(sorta);

    res.status(200).json({ getFull });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const bid = async (req: Request, res: Response) => {
  try {
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
