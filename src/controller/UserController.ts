import { User } from '../entity/User'
import { Address } from '../entity/Address'

import { AppDataSource } from '../data-source';
import {Request, Response} from "express";

const userRepository = AppDataSource.getRepository(User);

//User 저장 - OneToOne
export async function saveUser (req: Request, res: Response){
    await userRepository
    .save(req.body)
    .then((user) => {
        res.send(user);
    })
    .catch((err) => console.log(err));
}

//id 로 조회
export async function getUserById (req: Request, res: Response){
    let inputId = parseInt(req.params.id);    
    await userRepository
    .findOne({where: {id: inputId}})
    .then((user) =>{
        res.send(user);
        console.log(user);
    })
    .catch((err) =>console.log(err));
}

//get 전체 User
export async function getAllUser(req: Request, res:Response) {
    await userRepository
    .find()
    .then((user) =>{
        res.send(user);
        console.log(user);
    })
    .catch((err) => console.log(err));
}

//get 전체 User & Address
export async function getJoinedUser(req: Request, res:Response) {
    const user = await AppDataSource
    .getRepository(User)
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.address", "address")
    .getMany()
    .then((user) => {
        res.send(user);
    })
    .catch((err) => console.log(err)); 
}

//update User
export async function updateUser(req: Request, res:Response)  {
    await userRepository
    .createQueryBuilder()
    .update(User)
    .set(req.body)
    .where({id: req.params.id})
    .execute();
}

