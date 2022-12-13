import { Address } from '../entity/Address'
import { User } from '../entity/User'
import { AppDataSource } from '../data-source';
import {Request, Response} from "express";

const addressRepository = AppDataSource.getRepository(Address);
const userRepository = AppDataSource.getRepository(User);


export async function saveAddress(req:Request, res: Response){
    //Address 객체생성
    const address = new Address();

    //get User 데이터
    await userRepository
    .findOne({where: {id: req.body.userId}})
    .then((user) =>{

        //set Address
        if(user) address.user = user;
        address.detailAddress = req.body.detailAddress;
    })
    .catch((err) =>console.log(err));

    //save Address
    await addressRepository
    .save(address)
    .then((address)=>{
        res.send(address);
    })
    .catch((err)=> console.error(err));

}

export async function getAllAddress(req: Request, res:Response) {
    await addressRepository
    .find()
    .then((address) =>{
        res.send(address);
        console.log(address);
    })
    .catch((err) => console.log(err));
}

export async function getJoinedAddress(req: Request, res:Response) {
    const address = await AppDataSource
    .getRepository(Address)
    .createQueryBuilder("address")
    .leftJoinAndSelect("address.user", "user")
    .getMany()

    res.send(address);
}
