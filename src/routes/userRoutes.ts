import express, { Request, Response, NextFunction } from "express";
import * as userController from "../controller/UserController";

const router = express.Router();

//api/user
router.post("/", userController.saveUser);
router.get("/:id", userController.getUserById);
router.get("/", userController.getAllUser);

export default router;
