import React, { useEffect } from 'react'
import io from 'socket.io-client'
import { useState } from 'react';
import { Topbar } from './Topbar';
import { InputChatGlobal } from './InputChatGlobal';
import sendOption from "/svg/send.svg";
const socket = io('http://localhost:40001/');

export const ChatGlobal = () => {

  const [ message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMessage = {
      body: message,
      from: 'Me'
    }
    console.log(messages);
    setMessages([...messages, newMessage])
    socket.emit('message', message)
    setMessage('')
  }

  useEffect(()=>{
    socket.on('message', receiveMessage)

    return () => {
      socket.off('message', receiveMessage)
    }
  }, [])

  const receiveMessage = message => 
   setMessages(state => [...state, message]);

   return (
    <section
      className="grid max-h-[100vh]"
      style={{
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <nav className="bg-[#010409] h-[75px] flex items-center justify-between">
        <Topbar name={"Chat Global"} />
      </nav>
      <form
        onSubmit={handleSubmit}
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
}
