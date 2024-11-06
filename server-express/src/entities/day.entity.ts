import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Schedule } from "./schedule.entity";

@Entity()
export class Day {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  full_date: Date;

  @Column({ type: "int" })
  year: number;

  @Column({ type: "int" })
  month_number: number;

  @Column({ type: "varchar", length: 15 })
  month: string;

  @Column({ type: "int" })
  day_number_in_week: number;

  @Column({ type: "varchar", length: 10 })
  day_of_week: string;

  @Column({ type: "boolean" })
  is_holiday: boolean;

  @Column({ type: "boolean" })
  is_weekend: boolean;

  @OneToMany(() => Schedule, (schedule) => schedule.day, { cascade: true })
  schedule: Schedule;
}
