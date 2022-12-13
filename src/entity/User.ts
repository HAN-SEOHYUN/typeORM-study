import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Address } from "./Address";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  //@OneToOne(()=>Address, (address) => address.user) // 양방향매핑
  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[]
}
