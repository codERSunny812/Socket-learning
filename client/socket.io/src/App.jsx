import { useEffect, useMemo, useState } from 'react';
import {io} from 'socket.io-client'

const App = () => {

  const socket = useMemo(() => io('http://localhost:3004/'),[])

  const [message , setMessage] = useState("");

 useEffect(()=>{
  
   socket.on('connect',()=>{
    console.log('connected',socket.id); 
   });
   
   socket.on("welcome",(data)=>{
    console.log(data);
   })

   socket.on("join",(data)=>{
    console.log(data);
   })

   socket.on("receive_msg",(data)=>{
    console.log(data);
   })

   return () =>{
    socket.disconnect();
   }
 },[socket])

 const handleSubmit = (e)=>{
e.preventDefault();

socket.emit( "send_msg" , message );
setMessage("");

 }

  return (
    <div>
      <h1>socket  learning</h1>
      <form onSubmit={handleSubmit}>
        <textarea name="" id="" cols="30" rows="6"
        placeholder='type your message'
        value={message}
        onChange={(e)=> setMessage(e.target.value)}
        ></textarea>
        <button type="submit">send</button>
      </form>
    </div>
  )
}

export default App;