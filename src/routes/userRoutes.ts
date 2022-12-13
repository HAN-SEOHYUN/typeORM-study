import express from "express";
import * as userController from "../controller/UserController";

const router = express.Router();

//api/user
router.post("/", userController.saveUser);
router.get("/:id", userController.getUserById);
router.get("/", userController.getJoinedUser);

export default router;
