import { Request, Response } from "express";
import { getEntityManager } from "../config/entity-manager";
import { Schedule } from "../entities/schedule.entity";
import { Person } from "../entities/person.entity";
import { Shift } from "../entities/shift.entity";
import { Day } from "../entities/day.entity";

export const getSchedule = async (req: Request, res: Response) => {
  try {
    const entityManager = await getEntityManager();
    const email = res.locals.person.email;

    const getFull = await entityManager
      .createQueryBuilder(Schedule, "schedule")
      .innerJoinAndSelect("schedule.shift", "shift")
      .innerJoinAndSelect("schedule.day", "day")
      .innerJoinAndSelect("schedule.person", "person")
      .innerJoinAndSelect("person.info", "info")
      .where("person.email = :email", { email })
      .orderBy("day.full_date", "ASC")
      .getMany();

    const sortFull: any = {};
    getFull.forEach((schedule) => {
      const full_date = schedule.day.full_date.toLocaleString();
      const shift_name = schedule.shift.shift_name;

      if (!sortFull[full_date]) {
        sortFull[full_date] = [];
      }
      sortFull[full_date].push(shift_name);
    });
    res.status(200).json({ sortFull });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const submitBid = async (req: Request, res: Response) => {
  try {
    const entityManager = await getEntityManager();
    const email = res.locals.person.email;
    const data = req.body;
    const shift = data[0].split(" ")[0] + " Shift";

    const day = data[1];

    const [getPerson, getShift, getDay] = await Promise.all([
      entityManager.findOne(Person, { where: { email: email } }),
      entityManager.findOne(Shift, { where: { shift_name: shift } }),
      entityManager.findOne(Day, { where: { full_date: day } }),
    ]);

    if (!getPerson || !getShift || !getDay) {
      res.status(404).json({ error: "One or more entites were not found" });
      return;
    }

    const shiftCount = await entityManager.count(Schedule, {
      where: { person: getPerson, day: getDay },
    });
    if (shiftCount >= 2) {
      res
        .status(403)
        .json({ error: `Maximum for the day: ${getDay.full_date} reached` });
      return;
    }

    await entityManager.save(Schedule, {
      shift: getShift,
      day: getDay,
      person: getPerson,
    });
    res.status(201).json({
      message: `Successfully submitted bid for: ${getShift.shift_name} on ${getDay.full_date}`,
    });
  } catch (err: any) {
    if (err.code === "23505") {
      res.status(409).json({ error: "Bid already exist" });
      return;
    }
    res.status(500).json({ error: "Internal server error" });
  }
};
