import React from 'react'

export const MenssageIn = ({ name, content }) => {
  return (
    <div>
    <div className="flex mx-[40px] mt-[18px]">
      <img
        className="h-[45px] w-[45px] object-cover rounded-[35px]"
        src="/img/Ellipse 251.svg"
        alt="profile-image"
      />

      <div className="flex mb-4 mt-2 mx-2">
        <div
          className=" p-2 rounded-lg relative"
          style={{
            background: "url(/img/message.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "20rem",
          }}
        >
          <h1 className=" font-bold ml-3">{ name }</h1>
          <span className=" text-justify pr-14 ml-3">
            {" "}
            { content }
          </span>
          <div className=" text-xs flex justify-end"> 11:35pm </div>
        </div>
      </div>
    </div>
  </div>
  )
}
