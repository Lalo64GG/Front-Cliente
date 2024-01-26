import moreOption from "/svg/more.svg";
import emojiOption from "/svg/grammerly.svg";
import microphoneOption from "/svg/microphone.svg";
import sendOption from "/svg/send.svg";
import { useState } from "react";
import { createMessage } from "../../../public/js/getMessage";

export const InputBar = ({idReceiver, name, idSender, sender_name}) => {

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {

    console.log("recibe :", idReceiver, "Envia: ", idSender);
    e.preventDefault();
    if (message.trim() === "") {
      return alert("Error");
    }
  
     const objectMessage = {
       senderId: idReceiver,
       receiverId: idSender,
       sender_name: name,
       receiver_name:sender_name ,
       content: message 
     }
     console.log("Mensaje",objectMessage);

     setMessage("")

    await createMessage(objectMessage)



  }
 

  return (
<form
      onSubmit={handleSubmit}
      className="container w-full h-[80px] border-[2px] border-[#373A43] rounded-2xl flex justify-between items-center gap-[16px] py-[20px] px-5"
    >
      {/* Icons */}

      {/* Boton mas opciones */}
      <div className="relative">
        <img className="cursor-pointer" src={moreOption} alt="More Options" />
      </div>

      {/* Boton de emoji */}
      <div className="relative">
        <img className="cursor-pointer" src={emojiOption} alt="Emoji Option" />
      </div>

      {/* Input enviar mensaje */}
      <input
        type="text"
        placeholder="Type your message..."
        value={ message }
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 h-[100%] rounded-lg bg-[#373A43] px-[26px] appearance-none border-none focus:outline-none text-base font-semibold py-[25px]"
      />

      {/* Boton para grabar audio */}
      <div>
        <img src={microphoneOption} alt="Microphone Option" />
      </div>

      {/* Boton enviar mensaje */}
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
    </form>
  );
};

