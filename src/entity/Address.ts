import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne} from 'typeorm'
import { User }  from './User'

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  detailAddress: string

  @OneToOne(()=> User, (user)=> user.address,{
    cascade : true,
  })
  @JoinColumn()
  user : User
}