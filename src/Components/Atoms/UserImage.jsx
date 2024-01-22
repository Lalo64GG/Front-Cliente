import React from 'react'

export const UserImageProfile = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0 pt-8">
    <img className="absolute top-1/2 left-1/2 transform -translate-x-[-20px] -translate-y-[-10px] " src="/img/Rectangle 29.svg" alt="" height='60px' width='60px' />
    <img className="absolute top-1/2 left-1/2 transform -translate-x-[-70px] -translate-y-[-10px] " src="/img/Ellipse 253.svg" alt="" height='22px' width='22.1px' />

    {/* Usuario */}
    <span className="absolute top-1/2 left-1/2 transform -translate-x-[-32px] -translate-y-[-9px] text-[12px] text-[#ADB5BD]">@daniel13</span>

    {/* Background profile */}
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
        <circle cx="35" cy="35" r="35" fill="#4C535F" />
    </svg>

    {/* Icon asset */}
    <div className="absolute top-[80px]">
        <img src="/img/activo.svg" alt="" />
    </div>

    {/* Image Profile */}
    <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[14px] " src="/img/Ellipse2.svg" alt="" height='60px' width='60px' />
</div>
  )
}
