import express from "express";
import { getAllUsers, getUserProfile, login, register, update } from "../controller/usercontroller.js";

const router =express.Router()

router.route('/').post(register).get(getAllUsers)
router.route('/:id').put(update)
router.route('/login').post(login)
router.route('/profile').post(getUserProfile)

export default router