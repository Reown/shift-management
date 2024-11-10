import { Request, Response } from "express";
import { getEntityManager } from "../config/entity-manager";
import { bcrypt, match, genRandomPw } from "../utils/password.util";
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
    const data = req.body;
    const email = data[0];
    let password = genRandomPw(12);
    password = "654321";
    password = await bcrypt(password);

    const details = {
      personDetails: { email: email },
      authDetails: { password: password },
      roleDetails: { role: RolesEnum.USER },
    };

    await entityManager.transaction(async (transactionalEntityManager) => {
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
    });
    res.status(201).json({ message: "Successfully registered" });
  } catch (err: any) {
    if (err.code === "23505") {
      res.status(409).json({ error: "Email already exist" });
      return;
    }
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const entityManager = await getEntityManager();
    const data = req.body;
    const email = data[0];
    const inputPw = data[1];

    const getPerson = await entityManager.findOne(Person, {
      where: { email: email },
      relations: ["auth", "info"],
    });
    if (!getPerson) {
      res.status(404).json({ error: "Email not found" });
      return;
    }
    if (!getPerson.auth) {
      res.status(404).json({ error: "Password not found" });
      return;
    }

    const pwMatch = await match(inputPw, getPerson.auth.password);
    if (!pwMatch) {
      res.status(401).json({ error: "Invalid password" });
      return;
    }

    if (!getPerson.info) {
      res.status(203).json({ message: "Needs info" });
      return;
    }
    res.status(200).json({ message: "Successfully logged in" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const newInfo = async (req: Request, res: Response): Promise<void> => {
  try {
    const entityManager = await getEntityManager();
    const email = res.locals.person.email;
    const data = req.body;
    const firstName = data[0];
    const lastName = data[1];
    const birthDate = data[2];

    const infoDetails = {
      firstname: firstName,
      lastname: lastName,
      dob: birthDate,
      joindate: new Date(),
    };

    const getPerson = await entityManager.findOne(Person, {
      where: { email: email },
      relations: ["info"],
    });
    if (!getPerson) {
      res.status(404).json({ error: "Email not found" });
      return;
    }
    if (getPerson.info) {
      res.status(409).json({ error: "Info already exists" });
      return;
    }

    await entityManager.save(PersonInfo, {
      ...infoDetails,
      person: getPerson,
    });
    res.status(201).json({ message: "Successfully entered new info" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const changePw = async (req: Request, res: Response): Promise<void> => {
  try {
    const entityManager = await getEntityManager();
    const email = res.locals.person.email;
    const data = req.body;
    const oldPw = data[0];
    const newPw = data[1];
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
