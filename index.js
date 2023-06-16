import express from "express";
import contectdb from "./datebase/db.js";
import userrouter from "./router/userRouter.js";
import messagerouter from "./router/messageRouter.js";

import http from "http";

import * as io from 'socket.io'


import dotenv from "dotenv";
dotenv.config()
contectdb()
const app = express()
app.use(express.json())
app.use('/api/user',userrouter)
app.use('/api/message',messagerouter)




const Port = process.env.PORT || 3000;
const server = app.listen(process.env.PORT || Port,()=>{
    console.log(`server is running ${Port}`)
    });

     
const ServerOptions = {
  pingTimeout: 60000,
  cors: {
    origin: "https://doctor-mh0y.onrender.com",
  },
};

const socket1 = new io.Server(server, ServerOptions);


socket1.on("connection", (socket) => {
  console.log("connected to sockets");

  socket.on('setup', (userId) => {
      socket.join(userId);
      socket.broadcast.emit('online-users', userId)
      console.log(userId);

  });

  socket.on("typing", (room) => {
      console.log('typing');
      console.log(room);
      socket.to(room).emit("typing", room)
  });
  socket.on("stop typing", (room) => {
      console.log('stopped typing');
      console.log(room);
      socket.to(room).emit("stop typing", room)
  });

  socket.on('join chat', (room) => {
      socket.join(room);
      console.log('User Joined Room :' + room);
  });

  socket.on("new message", (newMessageReceived) => {

      var chat = newMessageReceived.chat;
      var room = chat._id;

      var sender = newMessageReceived.sender;
      var receiver = newMessageReceived.receiver;

      if (!sender || !sender._id) {
          console.log("Sender not defined or missing _id property");
          return;
      }

      var senderId = sender._id;
      console.log(senderId + "sender");
      const users = chat.users;

      if (!users) {
          console.log("Chat users not defined");
          return;
      }

      socket.to(room).emit("message received", newMessageReceived);
      socket.to(room).emit("message sent", "New Message");

  });

  socket.off("setup", () => {
      console.log("USER DISCONNECTED");
      socket.leave(userId);
  });
})