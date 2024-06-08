import express  from "express";
import {createServer} from 'http'
import {Server} from 'socket.io'


const app = express();

const server = createServer(app);



const io = new Server(server,{
    cors:"*",


});


app.get('/',(req,res)=>{
res.send('helo')
})

io.on('connection',(socket)=>{
    console.log(`a new user is connected with id ${socket.id}`);

    socket.on('sent-message',(msg)=>{
        console.log(`the received message is : ${msg}`)
    })


    
})







server.listen(9000,()=>{
    console.log("server is running");
})