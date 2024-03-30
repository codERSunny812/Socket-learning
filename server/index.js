const express = require('express');
const {Server} = require('socket.io');
const {createServer} = require('http');


const PORT = 3004;


const app = express();

const server = createServer(app);


// socket server  instance
const io = new Server(server,{
    cors:{
        origin: "*",
        methods:["GET","POST"],
        credentials:true

    }
})

// events 

// This event is fired upon a new connection.
io.on('connection', (socket) => {

    console.log("user connected with", socket.id);

    // new  event
    socket.emit("welcome", "Welcome to the chat server!");

    // broadcasting an event
    socket.broadcast.emit("join", `${socket.id} has joined`);

    // message event
    socket.on('send_msg',(data)=>{
    console.log(data);
    
    // io.emit("receive_msg", data);
   
        // Emit the received message to all clients except the sender
        
        socket.broadcast.emit("receive_msg", data);
    })



    // disconnect listner
    socket.on( 'disconnect', ()=>{
    console.log(`user disconnect ${socket.id}`)});
})



server.listen(PORT,()=>{
    console.log(`server is listing at ${PORT}`)
})