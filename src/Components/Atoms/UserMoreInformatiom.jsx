import React from 'react'

export const UserMoreInformatiom = () => {
  return (
    <div className="flex flex-col items-start justify-center py-5">
      <div className="flex items-center">
        <img src="/img/Street View.svg" alt="" />
        <span className="ml-2 text-[#ADB5BDBF] text-[12px]">
          Barranquilla, Atlantico - Colombia
        </span>
      </div>
      <div className="flex items-center">
        <img src="/img/Phone.svg" alt="" />
        <span className="ml-2 text-[#ADB5BDBF] text-[12px]">
          (+57) 301-194-0150
        </span>
      </div>
      <div className="flex items-center">
        <img src="/img/Letter.svg" alt="" />
        <span className="ml-2 text-[#ADB5BDBF] text-[12px]">
          ll-luis123@hotmail.com
        </span>
      </div>
    </div>
  )
}
