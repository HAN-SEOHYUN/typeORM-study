import { AppDataSource } from "./data-source";
import express, { Application } from "express";
import userRouter from './routes/userRoutes'


AppDataSource.initialize().then(async () => {

    // create express app
    const app = express();
    app.use(express.json()); 
    app.use(express.urlencoded({ extended: true }));

    //routes
    app.use('/api/user',userRouter);

    // run app
    app.listen(3000);

}).catch(error => console.log(error))