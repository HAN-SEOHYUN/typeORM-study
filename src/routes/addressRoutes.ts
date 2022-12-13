import express from "express";
import * as addressController from "../controller/AddressController";

const router = express.Router();

//api/address
router.post("/", addressController.saveAddress);
router.get("/", addressController.getJoinedAddress);

export default router;
