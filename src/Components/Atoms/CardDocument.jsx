import React from 'react'

export const CardDocument = ( { name, size, img}) => {
  return (
    <div className="w-[287px] h-[61px] mx-auto my-2 mb-4 rounded-md overflow-hidden md:max-w-2xl cursor-pointer" style={{ marginLeft: '16px', marginTop: '5px', background: 'var(--Theme-Dark-GradientGraySilver, linear-gradient(93deg, #373A43 -0.82%, rgba(63, 66, 77, 0.00) 119.1%))' }}>
          
          <div className="md:flex">
            <div className="flex" style={{ marginLeft: '8px', marginTop: '13px' }}>
              <img src= { img } alt="pdf" width='35px' height='35px' />
            </div>

            {/* Contenido de la card */}
            <div style={{ marginTop: '13px', marginLeft: '11px' }}>
              <div className=" text-white" style={{ fontSize: '13px', fontWeight: '500' }}>{ name }</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-[#ADB5BD]" style={{ fontSize: '12px', fontWeight: '500', marginTop: '-3px' }}>{ size }</p>
            </div>
          </div>

    </div>
  )
}
