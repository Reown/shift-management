import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Person } from "../entities/person.entity";
import { PersonAuth } from "../entities/person_auth.entity";
import { PersonInfo } from "../entities/person_info.entity";
import { PersonRole } from "../entities/person_role.entity";

import { Task } from "../entities/task.entity";
import { oldPerson } from "../entities/oldperson.entity";
import { Users } from "../entities/testpk.entity";
import { Profile } from "../entities/testfk.entity";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DB_URL,
  ssl: true,
  //entities: [Task, oldPerson, Users, Profile],
  entities: [Person, PersonAuth, PersonInfo, PersonRole, Profile, Users],
  synchronize: false,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Connected to postgres");
  })
  .catch((error) => console.log(error));
