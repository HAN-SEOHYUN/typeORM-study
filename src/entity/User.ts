import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    age :number;

    // @OneToOne(()=>Address, (address) -> address.user)
    // address : Address
}