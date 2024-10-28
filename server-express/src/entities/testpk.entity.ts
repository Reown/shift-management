import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  BaseEntity,
  JoinColumn,
} from "typeorm";
import { Profile } from "./testfk.entity";

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Profile, { cascade: true })
  @JoinColumn({ name: "profile_id" })
  profile: Profile;
}
