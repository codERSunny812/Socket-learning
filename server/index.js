const express = require('express');
const {Server} = require('socket.io');
const {createServer} = require('http');
const cors = require('cors')

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
    
})



server.listen(PORT,()=>{
    console.log(`server is listing at ${PORT}`)
}

)