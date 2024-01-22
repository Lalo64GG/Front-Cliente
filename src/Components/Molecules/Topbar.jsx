import React from 'react'
import { ButtonsIcons } from './ButtonsIcons'
export const Topbar = ({ name }) => {
  return (
    <>
    <div className="flex mx-[40px] mt-[18px]">
      <img
        className="h-[45px] w-[45px] object-cover rounded-[35px]"
        src="/img/Ellipse 251.svg"
        alt=""
      />
      <div className=" flex flex-col px-2">
        <h1 className=" text-[#FFFFFF] font-bold"> { name }</h1>
        <p className=" text-[#ADB5BD] text-sm">Online</p>
      </div>
    </div>
    
    <ButtonsIcons/>

  </>
  )
}
