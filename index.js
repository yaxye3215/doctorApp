import express from "express";
import contectdb from "./datebase/db.js";
import userrouter from "./router/userRouter.js";
import messagerouter from "./router/messageRouter.js";
import { Server } from 'socket.io';
import http from "http";


import dotenv from "dotenv";
dotenv.config()
contectdb()
const app = express()
app.use(express.json())
app.use('/api/user',userrouter)
app.use('/api/message',messagerouter)
const server = http.createServer(app);

const socketio = new Server(server);


socketio.on("connection", (socket)=>{
    console.log("connetetd");
    console.log(socket.id, "has joined");
    socket.on("signin", (id) => {
      console.log(id);
      clients[id] = socket;
      console.log(clients);});
      socket.on("message", (msg) => {
        console.log(msg);
        let targetId = msg.targetId;
        if (clients[targetId]) clients[targetId].emit("message", msg);
      });

})



const Port = process.env.PORT || 3000;
app.listen(process.env.PORT || Port,()=>{
    console.log(`server is running ${Port}`)
    })