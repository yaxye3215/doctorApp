import express from "express";
import { Create } from "../controller/doctorcontroller.js";


const router = express.Router();

router.route('/doctor').post(Create)

export default router;