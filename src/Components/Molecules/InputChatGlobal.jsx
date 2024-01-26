import React from 'react'
import moreOption from "/svg/more.svg";
import emojiOption from "/svg/grammerly.svg";
import microphoneOption from "/svg/microphone.svg";

export const InputChatGlobal = ({message ,setMessage }) => {
  return (
    <>
    <div className="relative px-4">
        <img className="cursor-pointer" src={moreOption} alt="More Options" />
      </div>

      {/* Boton de emoji */}
      <div className="relative px-4">
        <img className="cursor-pointer" src={emojiOption} alt="Emoji Option" />
      </div>

      {/* Input enviar mensaje */}
      <input
        type="text"
        placeholder="Type your message..."
        value={ message }
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 h-[100%] rounded-lg bg-[#373A43] px-[26px] appearance-none border-none focus:outline-none text-base font-semibold py-[15px]"
      />

      {/* Boton para grabar audio */}
      <div className='realtive px-4'>
        <img src={microphoneOption} alt="Microphone Option" />
      </div>

      {/* Boton enviar mensaje */}
     
    </>
  )
}
