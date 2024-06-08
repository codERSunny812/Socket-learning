import {io} from 'socket.io-client'
import {useEffect , useState} from 'react'

function App() {

  const[message , setMessage]=useState("")

  useEffect(() => {
    const socket = io('http://localhost:9000');

    socket.on('connect', () => {
      console.log(`A new user is connected with the id ${socket.id}`);

      // sending the message to the backedn 
      socket.emit('sent-message',message);
    });

    // Cleanup on component unmount
    return () => {
      socket.disconnect();
    };
  }, []); // Empty dependency array ensures this runs only once



  return (
   <>
   <div style={{backgroundColor:'chocolate' , height:'100%',width:'100%'}}>


   <h1>socket.io</h1>

   <form action="">

    <input type="text" name="" id=""  placeholder="type your mess
  "
  value={message}
  onChange={(e)=>{
    setMessage(e.target.value);
  }}
  
  />

  <button type="submit">send</button>
  
   </form>
      </div>
   </>
  )
}

export default App
