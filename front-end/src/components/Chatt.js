import React from 'react'
import './css/ChatStyle.css'
import {useEffect, useState} from "react";
import Pusher from "pusher-js";

function Chatt() {


  const [username, setUsername] = useState('username');
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
    <div>
        
        <div class="container bootstrap snippets bootdeys">
<div class="col-md-7 col-xs-12 col-md-offset-2">
  
  <div class="panel" id="chat">
    <div class="panel-heading">
      <h3 class="panel-title">
        <i class="icon wb-chat-text" aria-hidden="true"></i> 
      </h3>
    </div>
    <div class="panel-body">
      <div class="chats">
        <div class="chat">
          <div class="chat-avatar">
            <a class="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="June Lane">
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..."/>
              <i></i>
            </a>
          </div>
          <div class="chat-body">
            <div class="chat-content">
              <p value={username}
                         onChange={e => setUsername(e.target.value)}>
               <div className="list-group list-group-flush border-bottom scrollarea">
                  {messages.map(message => {
                      return (
                          <div className="list-group-item list-group-item-action py-3 lh-tight">
                              <div className="d-flex w-100 align-items-center justify-content-between">
                                  <strong className="mb-1">{message.username}</strong>
                              </div>
                              <div className="col-10 mb-1 small">{message.message}</div>
                          </div>
                      )
                  })}
              </div>

              </p>
              <time class="chat-time" datetime="2015-07-01T11:37">11:37:08 am</time>
            </div>
          </div>
        </div>
        



        {/* <div class="chat">
          <div class="chat-avatar">
            <a class="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="June Lane">
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..."/>
              <i></i>
            </a>
          </div>
          <div class="chat-body">
            <div class="chat-content">
              <p>
                If necessary, please ask me.
              </p>
              <time class="chat-time" datetime="2015-07-01T11:40">11:40:10 am</time>
            </div>
          </div>
        </div> */}


      </div>
    </div>
    {/* <div class="panel-footer">
      <form>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Say something"/>
          <span class="input-group-btn">
            <button class="btn btn-primary" type="button">Send</button>
          </span>
        </div>
      </form>
    </div> */}

<form onSubmit={e => submit(e)}>
              <input className="form-control" placeholder="اكتب رسالتك هنا .." value={message}
                     onChange={e => setMessage(e.target.value)}
              />
          </form>
  </div>
 
</div>
</div>

    </div>
  )
}

export default Chatt


