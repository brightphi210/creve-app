import React, { useState, useEffect } from 'react';
import { RiNotificationLine } from "react-icons/ri";
import './NotificationCompo.scss';
import imageNotificate from './images/Avatars1.png';
import CreativeBottomBar from './CreativeBottomBar';

const NotificationCompo = () => {
  // const [messages, setMessages] = useState([]);
  // const [websocket, setWebsocket] = useState(null);

  // useEffect(() => {
  //   const socket = new WebSocket('wss://creve.onrender.com/ws/clientnotifications/');
  //   setWebsocket(socket);

  //   socket.onopen = () => {
  //     console.log("WebSocket connected");
  //   };

  //   socket.onmessage = (event) => {
  //     const newMessage = JSON.parse(event.data);


  //     setMessages([...messages, newMessage.notification]);
  //     // console.log(newMessage)
  //   };

  //   socket.onclose = () => {
  //     console.log("WebSocket closed");
  //   };

  //   return () => {
  //     socket.close();
  //   };
  // }, []);




  return (
    <div className='notificationSection'>
      <div className='notifyDiv'>
        <h2>Notifications</h2>
        <RiNotificationLine />
      </div>

      {/* <div className='allNotDiv'>
        {messages.map((message, index) => (
          <div className='eachNotDiv' key={index}>
            <div className='eachNotDivImg'>
              <img src={imageNotificate} alt="" />
            </div>

            <div className='eachNotDivText'>
              <h2>{message.title}</h2> 
              <p>{message.time}</p> 
            </div>
          </div>
        ))}
      </div> */}

      <CreativeBottomBar />
    </div>
  );
};

export default NotificationCompo;
