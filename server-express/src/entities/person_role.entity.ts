import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Person } from "./person.entity";

export enum RolesEnum {
  ADMIN = "admin",
  MANAGER = "manager",
  USER = "user",
}

@Entity({ name: "person_role" })
export class PersonRole extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: RolesEnum,
    nullable: false,
  })
  role: RolesEnum;

  @OneToOne(() => Person)
  @JoinColumn({ name: "person_id" })
  person: Person;
}
