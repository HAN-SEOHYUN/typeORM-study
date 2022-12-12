import { User } from '../entity/User'
import { AppDataSource } from '../data-source';
import {Request, Response} from "express";

export function saveUser (req: Request, res: Response){
    const userRepository = AppDataSource.getRepository(User);
    const newUser = userRepository.create(req.body);
    userRepository.save(newUser);
    res.send(newUser);
}