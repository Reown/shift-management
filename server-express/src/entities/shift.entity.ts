import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Schedule } from "./schedule.entity";

@Entity()
export class Shift {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50 })
  shift_name: string;

  @Column({ type: "varchar", length: 15 })
  shift_time: string;

  @Column({ type: "int" })
  hours_of_work: number;

  @OneToMany(() => Schedule, (schedule) => schedule.shift, { cascade: true })
  schedule: Schedule;
}
