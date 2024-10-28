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
  name: string;

  @Column()
  age: number;

  @Column()
  joindate: Date;

  @OneToOne(() => Person)
  @JoinColumn({ name: "person_id" })
  person: Person;
}
