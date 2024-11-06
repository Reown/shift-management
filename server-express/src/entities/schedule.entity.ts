import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Shift } from "./shift.entity";
import { Day } from "./day.entity";
import { Person } from "./person.entity";

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Shift)
  @JoinColumn({ name: "shift_id" })
  shift: Shift;

  @ManyToOne(() => Day)
  @JoinColumn({ name: "day_id" })
  day: Day;

  @ManyToOne(() => Person)
  @JoinColumn({ name: "person_id" })
  person: Person;
}
