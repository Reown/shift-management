import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Person } from "./person.entity";

@Entity({ name: "person_info" })
export class PersonInfo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  firstname: string;

  @Column({ nullable: false })
  lastname: string;

  @Column({ nullable: false })
  dob: string;

  @Column({ nullable: false })
  joindate: Date;

  @OneToOne(() => Person)
  @JoinColumn({ name: "person_id" })
  person: Person;
}
