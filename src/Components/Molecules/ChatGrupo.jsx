// En tu componente React

import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { Topbar } from './Topbar';
import { InputChatGlobal } from './InputChatGlobal';
import sendOption from "/svg/send.svg";

const ENDPOINT = 'http://localhost:40001';

const yourToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9ncmFtbWVyIjpbeyJpZCI6MywibmFtZSI6Ikplc3VzIiwiZW1haWwiOiJwcm9ncmFtYWRvcjNAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMTExIiwiZ2l0X2xpbmsiOm51bGwsImluc3RhZ3JhbV9saW5rIjpudWxsLCJsaW5rZWRpbl9saW5rIjpudWxsLCJwaG9uZV9udW1iZXIiOiIxMjM0NTY3ODkiLCJza2lsbHMiOiJKYXZhU2NyaXB0LCBSZWFjdCwgTm9kZS5qcyJ9XSwiaWF0IjoxNzA2MjQwNjQ4LCJleHAiOjE3MDYyNDQyNDh9.N5DpRjaN0X5lMqRGyUwPebQffGAoMWv-7YbNGKdkZPc"

const socket = socketIOClient(ENDPOINT, {
  extraHeaders: {
    Authorization: `Bearer ${yourToken}`, // Reemplaza 'yourToken' con el token que deseas enviar
  },
});

 export const ChatGrupo = () => {
  const [room, setRoom] = useState('room1');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault()
    console.log(messages);
    if (message.trim( ) === "") {
      return alert('Error')
    }
    const newMessage = {
      body: message,
      from: 'Me'
    }
    setMessages([...messages, newMessage])
    socket.emit('messageToRoom', { room, text: message });
    setMessage('');
  };

  useEffect(() => {
    socket.emit('joinRoom', 'room1' );
    
    socket.on('message', receiveMessage );
    return () => {
      socket.disconnect('message', receiveMessage);
    };
  }, []);

  const receiveMessage = message => 
  setMessages(state => [...state, message]);

  return (
    <section className="grid max-h-[100vh]"
    style={{
      gridTemplateRows: "auto 1fr auto",
    }} >
     <nav className="bg-[#010409] h-[75px] flex items-center justify-between">
        <Topbar url={"/svg/react 1.svg"} name={"Chat Programadores"} />
    </nav>
    <form
        onSubmit={handleSendMessage}
        className="container w-full max-h-[80vh] overflow-hidden rounded-2xl flex flex-col gap-[16px] py-[20px] px-5 relative" // Agregué la clase 'relative'
      >
        <ul className='text-white flex-grow overflow-auto'>
          {
            messages.map((message, i) => (
              <li key={i} className= {
                `my-2 p-2 table rounded-md ${message.from === 'Me' ? `bg-sky-700` : `bg-black ml-auto`}`
              }>
                <span className=' text-xs text-slate-300 block'>{message.from}</span> 
                <span className=' text-md '>{message.body}</span>
              </li>
            ))
          }
        </ul>
  
        <div className="fixed bottom-4 mr-96 w-[1000px] py-3 px-[34px] h-fit container border-[2px] border-[#373A43] rounded-2xl flex justify-between items-center -my-1">
          <InputChatGlobal message={message} setMessage={setMessage} />
          <button
            className="p-[8px]"
            type="submit"
            style={{
              borderRadius: "6px",
              background:
                "linear-gradient(180deg, #1C1D21 -6%, #0099F7 211.74%)",
            }}
          >
            <img src={sendOption} alt="Send Option" />
          </button>
        </div>
      </form>
    </section>
  );
};