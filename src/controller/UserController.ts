import { User } from '../entity/User'
import { AppDataSource } from '../data-source';
import {Request, Response} from "express";

const userRepository = AppDataSource.getRepository(User);

export async function saveUser (req: Request, res: Response){
    let inputUser = req.body;
    const newUser = userRepository.create(inputUser);

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
    .findAndCount()
    .then((user) =>{
        res.send(user);
        console.log(user);
    })
    .catch((err) => console.log(err));
}

