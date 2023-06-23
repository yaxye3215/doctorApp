import express from "express";
import { Create, getdoctors } from "../controller/doctorcontroller.js";


const router = express.Router();

router.route('/doctor').post(Create)
router.route('/doctors').get(getdoctors)

export default router;