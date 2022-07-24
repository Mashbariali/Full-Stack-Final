import React, { useEffect, useState } from 'react'
import Pusher from "pusher-js";
function Chat() {
const [username,setUserName] = useState('username');
const [messages,setMessages] = useState([])
const [message,setMessage] = useState('');
let allmessage = [];
useEffect( ()=>{
   
    Pusher.logToConsole = true;

    const pusher = new Pusher('6071f54d46bac90efda6', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('Chat');
    channel.bind('message', function(data) {
      allmessage.push(data);
      setMessages(allmessage);
    });

}, [])

const submit = async e =>{
    e.preventDefault();

    await fetch('http://127.0.0.1:8000/Chat/mesaage',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username,
            message
        })
    });
    setMessage('');

}
  return (
    <div className='container'>
       <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" >
    <div class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
      <svg class="bi pe-none me-2" width="30" height="24"><use href="#bootstrap"></use></svg>
      <span class="fs-5 fw-semibold">List group</span>
      <input className='fs-5 fw-semibold' value={username} onChange = {e => setUserName(e.target.value)}/>
    </div>
    <div class="list-group list-group-flush border-bottom scrollarea">
      
    {messages.map(message =>{
            return (
                <div  class="list-group-item list-group-item-action py-3 lh-sm">
    
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1">{message.username}</strong>
        
        </div>
        <div class="col-10 mb-1 small">{message.message}</div>
      
      

      </div>
    
                
            );
        })}
    </div>
      
  </div>
  <form onSubmit={e => submit(e)}>
    <input className="form-control" placeholder='write a message' value={message}
    onChange = {e=>setMessage(e.target.value)}/>
  </form>
</div>
  )
}

export default Chat