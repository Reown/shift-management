import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PersonRole } from "./person_role.entity";
import { PersonAuth } from "./person_auth.entity";
import { PersonInfo } from "./person_info.entity";

@Entity()
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  email: string;

  @OneToOne(() => PersonRole, (role) => role.person, { cascade: true })
  role: PersonRole;

  @OneToOne(() => PersonAuth, (auth) => auth.person, { cascade: true })
  auth: PersonAuth;

  @OneToOne(() => PersonInfo, (info) => info.person, { cascade: true })
  info: PersonInfo;
}
