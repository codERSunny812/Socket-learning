import { useEffect } from 'react';
import {io} from 'socket.io-client'

const App = () => {

  const socket = io('http://localhost:3004/');

 useEffect(()=>{
   socket.on('connect',()=>{
    console.log('connected',socket.id); 
   });
   
   socket.on("welcome",(data)=>{
    console.log(data);
   })
 },[socket])

  return (
    <div>
      <h1>socket  learning</h1>
    </div>
  )
}

export default App;