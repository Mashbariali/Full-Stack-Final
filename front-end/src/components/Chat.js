import {useEffect, useState} from "react";
import Pusher from "pusher-js";
function Chat() {

  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  let allMessages = [];

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

  return (

      <div className="col-md-6 mx-auto d-flex flex-column mt-5">
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
                                  <strong className="mb-1">{localStorage.getItem("username")}</strong>
                              </div>
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

          <a href='/addRating' className='text-center mt-5'>إنهاء الطلب</a>
          <a href='/cancelOrder' className='text-center mb-5'>الغاء الطلب</a>

      </div>
  );
}

export default Chat
    