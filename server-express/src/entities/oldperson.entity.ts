import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

export type UserRole = "admin" | "manager" | "user";

@Entity()
export class oldPerson extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false, unique: true })
  username!: string;

  @Column({ nullable: false })
  password!: string;

  @Column({ type: "enum", enum: ["admin", "manager", "user"] })
  role!: UserRole;
}
