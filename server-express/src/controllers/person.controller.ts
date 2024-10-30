import { Request, Response } from "express";
import { getEntityManager } from "../config/entity-manager";
import { Person } from "../entities/person.entity";
import { PersonAuth } from "../entities/person_auth.entity";
import { PersonInfo } from "../entities/person_info.entity";
import { PersonRole } from "../entities/person_role.entity";
import { RolesEnum } from "../entities/person_role.entity";

export const insert = async (req: Request, res: Response): Promise<void> => {
  try {
    const entityManager = await getEntityManager();

    const personData = [
      {
        email: "testadmin1",
        auth: { password: "testpw1" },
        role: { role: RolesEnum.ADMIN },
        info: {
          firstname: "first1",
          lastname: "last1",
          dob: "test",
          joindate: new Date(),
        },
      },
    ];

    const splitData = personData.map((data) => ({
      personDetails: { email: data.email },
      authDetails: { password: data.auth.password },
      roleDetails: { role: data.role.role },
      infoDetails: {
        firstname: data.info.firstname,
        lastname: data.info.lastname,
        dob: data.info.dob,
        joindate: data.info.joindate,
      },
    }));

    await entityManager.transaction(async (transactionalEntityManager) => {
      for (const details of splitData) {
        console.log(details);
        const newPerson = await transactionalEntityManager.save(
          Person,
          details.personDetails
        );
        await transactionalEntityManager.save(PersonAuth, {
          ...details.authDetails,
          person: newPerson,
        });
        await transactionalEntityManager.save(PersonRole, {
          ...details.roleDetails,
          person: newPerson,
        });
        await transactionalEntityManager.save(PersonInfo, {
          ...details.infoDetails,
          person: newPerson,
        });
      }
    });
    res.status(200).json({ message: "user created successfully" });
  } catch (err: any) {
    if (err.code === "23505") {
      res.status(409).json({ message: "username already exists" });
      return;
    }
    res.status(500).json({ message: "error creating user", error: err });
  }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const entityManager = await getEntityManager();
    const { id } = req.params;
    const deleteResult = await entityManager.delete(Person, { id: Number(id) });

    if (deleteResult.affected === 0) {
      res.status(404).json({ message: "id not found" });
      return;
    }
    res.status(204).json({ message: "id deleted" });
  } catch (err) {
    res.status(500).json({ message: "error", error: err });
  }
};

export const getone = async (req: Request, res: Response): Promise<void> => {
  try {
    const entityManager = await getEntityManager();
    const { id } = req.params;
    const getPerson = await entityManager
      .getRepository(Person)
      .createQueryBuilder("person")
      .leftJoinAndSelect("person.role", "role")
      .leftJoinAndSelect("person.auth", "auth")
      .leftJoinAndSelect("person.info", "info")
      .where("person.id = :id", { id: Number(id) })
      .getOne();

    if (getPerson === null) {
      res.status(404).json({ message: "id not found" });
      return;
    }
    console.log(getPerson);
    res.status(200).json({ message: "id found" });
  } catch (err) {
    res.status(500).json({ message: "error", error: err });
  }
};

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const entityManager = await getEntityManager();
    const email = req.body[0];

    const newStaff = [
      {
        email: email,
        auth: { password: "testpw1" },
      },
    ];

    const splitNewStaff = newStaff.map((data) => ({
      personDetails: { email: data.email },
      authDetails: { password: data.auth.password },
    }));

    await entityManager.transaction(async (transactionalEntityManager) => {
      for (const details of splitNewStaff) {
        const newStaff = await transactionalEntityManager.save(
          Person,
          details.personDetails
        );
        await transactionalEntityManager.save(PersonAuth, {
          ...details.authDetails,
          person: newStaff,
        });
      }
    });

    res.status(201).json("success");
  } catch (err: any) {
    if (err.code === "23505") {
      res.status(409).json({ message: "email already exists" });
      return;
    }
    res.status(500).json("server error");
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const entityManager = await getEntityManager();
    const data = req.body;
    const email = data[0];
    const password1 = data[1];

    await entityManager.transaction(async (transactionalEntityManager) => {
      {
        const getEmail = await transactionalEntityManager.findOne(Person, {
          where: { email: email },
        });

        if (getEmail === null) {
          res.status(404).json({ message: "user not found" });
          return;
        }

        const getpw = await transactionalEntityManager.findOne(PersonAuth, {
          where: { person: getEmail },
        });

        if (getpw) {
          const { password } = getpw;
          if (password !== password1) {
            res.status(401).json({ message: "wrong pw" });
            return;
          }
        }

        res.status(200).json({ message: "login success" });
      }
    });
  } catch (err) {
    console.log();
  }
};

export const getInfo = async (req: Request, res: Response): Promise<void> => {
  try {
    const entityManager = await getEntityManager();

    await entityManager.transaction(async (transactionalEntityManager) => {});
  } catch (err) {}
};
