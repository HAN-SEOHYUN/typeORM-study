import { User } from '../entity/User'
import { Address } from '../entity/Address'

import { AppDataSource } from '../data-source';
import {Request, Response} from "express";

const userRepository = AppDataSource.getRepository(User);

export async function saveUser (req: Request, res: Response){
    const newUser = userRepository.create(req.body);

    await userRepository
    .save(newUser)
    .then((user) => {
        res.send(user);
    })
    .catch((err) => console.log(err));
}

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

export async function getAllUser(req: Request, res:Response) {
    await userRepository
    .find()
    .then((user) =>{
        res.send(user);
        console.log(user);
    })
    .catch((err) => console.log(err));
}

export async function getJoinedUser(req: Request, res:Response) {
    const user = await AppDataSource
    .getRepository(User)
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.address", "address")
    .getMany()

    res.send(user);
}

