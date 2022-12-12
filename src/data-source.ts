import "reflect-metadata";
import { DataSource } from "typeorm";
import {Address} from './entity/Address';
import {User} from './entity/User';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "a123!",
    database: "typeorm_study_db",
    entities: [Address, User],
    synchronize: true,
    logging: true,
    migrations: [],
  subscribers: [],
  });
