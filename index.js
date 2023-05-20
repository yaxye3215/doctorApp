import express from "express";
import contectdb from "./datebase/db.js";
import userrouter from "./router/userRouter.js";
import dotenv from "dotenv";

dotenv.config()
contectdb()
const app = express()
app.use(express.json())
app.use('/api/user',userrouter)



const Port = process.env.PORT || 3000;
app.listen(process.env.PORT || Port,()=>{
    console.log(`server is running ${Port}`)
    })