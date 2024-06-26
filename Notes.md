## What is websocket?

* WebSocket is an communication protocal which is used in  the communication between the  client and the sender.It's also known as duplex  connection and it provide bi direction communication between the  sender and the reciever.

### How the WebSocket work?
* WebSockets work by establishing a persistent connection between the client and server over a single TCP socket. Once the connection is established, data can be sent and received in real-time between the client and server.
The WebSocket protocol consists of two parts: an initial HTTP handshake and the Web Socket protocol itself.

#### HTTP Handshake
* The initial HTTP handshake is used to establish the WebSocket connection. The client sends an HTTP request to the server, specifying the WebSocket protocol in the Upgrade header. The server responds with an HTTP response that includes an Upgrade header indicating that it is switching to the WebSocket protocol.

#### WebSocket Protocol
* Once the HTTP handshake is complete, the client and server can communicate using the WebSocket protocol. The WebSocket protocol is a simple, message-based protocol that allows for bi-directional communication between the client and server.


### What Socket.IO

Socket.IO is a  web socket library that enables  **low-latency** , **bidirectional** and **event-based** communication between a client and a server.


## Installation and Setup

#### Server Side

```
npm i socket.io
```


##### Socket Server Side setup:

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

// server-side
io.on("connection", (socket) => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

server.listen(PORT,()=>{
    console.log(`server is listing at ${PORT}`)
}

)
```

#### Client Side
```
npm i socket.io-client
```

##### Client side setup
```
const io = require('socket.io-client');

//connecting front end with the socket server
const socket = useMemo(() => io('http://localhost:3000'),[]);

socket.on('connect',()=>{

    console.log(`socket is connected ${socket.id}`);

})

```

### Events

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

    In Socket.IO, the`io` object represents the entire Socket.IO server, while the `socket` object represents an individual connection to a client. When you're inside a connection event handler (like `io.on('connection', ...)`), you're dealing with a specific client's socket, so you should use the `socket` object to interact with that client.
