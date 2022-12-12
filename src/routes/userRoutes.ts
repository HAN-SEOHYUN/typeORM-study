import express, { Request, Response, NextFunction } from "express";
import * as userController from "../controller/UserController";

const router = express.Router();

//api/user
router.post("/", userController.saveUser);

export default router;
