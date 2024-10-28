import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Person } from "./person.entity";

@Entity({ name: "person_auth" })
export class PersonAuth extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  password: string;

  @OneToOne(() => Person)
  @JoinColumn({ name: "person_id" })
  person: Person;
}
