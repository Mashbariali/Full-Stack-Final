import {useEffect, useState} from "react";
import Pusher from "pusher-js";
import { Container } from "react-bootstrap";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Chat() {

    const [username, setUsername] = useState(localStorage.getItem("username"));
      const [messages, setMessages] = useState([]);
      const token =localStorage.getItem("token")
      const navigate = useNavigate("")
     
  const [message, setMessage] = useState('');
  let allMessages = [];

//   const setUpData = (e)=>{
//     let {id } = e
//     localStorage.setItem("id" , id)
//   }
  useEffect(() => {
      Pusher.logToConsole = true;

      const pusher = new Pusher('c8930c2569cb857ff058', {
          cluster: 'us2'
      });

      const channel = pusher.subscribe('chat');
      channel.bind('message', function (data) {
          allMessages.push(data);
          setMessages(allMessages);
      });
  }, []);

  const submit = async e => {
      e.preventDefault();

      await fetch('https://wasllha2022-django.herokuapp.com/Chat/mesaages', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              username,
              message
          })
      });

      setMessage('');
  }
//   const onDelete=(id)=>{
//     axios.delete(`https://wasllha2022-django.herokuapp.com/Delivery/delete_Order${id}`,{
    
//     },{headers: { 'Authorization': `Bearer ${token}`}}).then(res=>{
//     }).then(res=>{
      
//       navigate("/addRating")

// })
//   }

  return (
    <Container className="Chat-App">
      <div className="col-md-6 mx-auto d-flex flex-column mt-5 chattApp animate__animated animate__backInDown">
          <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
              <div
                  className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                  <label className="fs-5 fw-semibold" value={localStorage.getItem("username")}
                         onChange={e => setUsername(e.target.value)}>اسم المستخدم: {localStorage.getItem("username")}</label>
              </div>
              <div className="list-group list-group-flush border-bottom scrollarea">
                  {messages.map(message => {
                      return (
                          <div className="list-group-item list-group-item-action py-3 lh-tight">
                              <div className="d-flex w-100 align-items-center justify-content-between">
                              <strong className="mb-1">{message.username}</strong>                              </div>
                              <div className="col-10 mb-1 small">{message.message}</div>
                          </div>
                      )
                  })}
              </div>
          </div>
          <form onSubmit={e => submit(e)}>
              <input className="form-control" placeholder="اكتب رسالتك هنا .." value={message}
                     onChange={e => setMessage(e.target.value)}
              />
          </form>

          <a href='/addRating' className='text-center mt-5'>اكمال الطلب</a>
          <a href='/cancelOrder' className='text-center mb-5'>الغاء الطلب</a>

      </div>
      </Container>
  );
}

export default Chat
