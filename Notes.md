
## What Socket.IO

Socket.IO is a  web socket library that enables  **low-latency** , **bidirectional** and **event-based** communication between a client and a server.

* WebSocket is an communication protocal which is used in  the communication between the  client and the sender.It's also known as duplex  connection and it provide bi direction communication between the  sender and the reciever.


##### Socket Server Side Code:

```

const express = require('express');
const {Server} = require('socket.io');
const {createServer} = require('http')

const PORT = 3004;


const app = express();

const server = createServer(app);


// socket server  instance
const io = new Server(server,{
    cors:{
        origin:"http://localhost:5174/",
        methods:["GET","POST"],
        credentials:true
    }
})

server.listen(PORT,()=>{
    console.log(`server is listing at ${PORT}`)
}

)
```


##### Events

In Socket.IO, events are messages or signals that are transmitted between the server and the connected clients. They are used to facilitate real-time communication between the server and the clients. Events can be used to notify clients about various changes or updates, such as new messages, user connections, disconnections, or any custom actions that occur within the application.


* The Most Basic Event in Socket.io is:

  ```
  io.on("connection", (socket) => {
    // ...
  });
  ```
  This event wil triggered upon new connection.
* **SocketId:**

  Each connected user  will assign a random 20 character identifier.

  ```
  // server-side
  io.on("connection", (socket) => {
    console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
  });

  // client-side
  socket.on("connect", () => {
    console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
  });
  ```
  In the above example connection is an event and IO is used to send the message/event to all the connected socket or connected user to the socket and "on" is used to handle the event and here in the above example we are sending and event and some data from the server and  a socket(a connected user) is consuming the event and also printing the value of the upcoming data.
