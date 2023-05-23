import express from "express";
import { sendMessage } from "../controller/messagecontroller.js";



const router = express.Router()
router.route('/').post(sendMessage)

export default router;