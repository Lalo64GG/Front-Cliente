import moreOption from "/svg/more.svg"
import emojiOption from "/svg/grammerly.svg"
import microphoneOption from "/svg/microphone.svg"
import sendOption from "/svg/send.svg"

export const InputBar = () => {


  return (
    <div className="container w-full h-[80px] border-[2px] border-[#373A43] rounded-2xl flex justify-between items-center gap-[16px] py-[20px] px-5">
    {/* Icons */}

    {/* Boton mas opciones */}
    <div className="relative">
      <img className=' cursor-pointer' src={moreOption} />
    </div>

    {/* Boton de emoji */}
    <div className="relative">
      <img className=' cursor-pointer' src={emojiOption} />
    </div>

    {/* Input enviar mensaje */}
    <input
      type="text"
      placeholder="Type your message..."
      className="flex-1 h-[100%] rounded-lg bg-[#373A43] px-[26px] appearance-none border-none focus:outline-none text-base font-semibold py-[25px]"
    />

    {/* Boton para grabar audio */}
    <div>
    <img src={microphoneOption}  />
    </div>


    {/* Boton enviar mensaje */}
    <button
      className="p-[8px] "
      style={{
        borderRadius: "6px",
        background:
          "linear-gradient(180deg, #1C1D21 -6%, #0099F7 211.74%)",
      }}
    >
      <img src={sendOption}/>
    </button>
  </div>
  )
}
