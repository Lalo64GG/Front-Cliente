import React, { useEffect } from 'react'
import { Formulario } from '../Molecules/Formulario'

export const Login = () => {
  return (
    <div className= " bg-[#f1f1f1] flex w-full h-screen " >
      <div className=' w-full lg:w-1/2 flex items-center justify-center'>
          <Formulario/>
      </div>
        <div className=' hidden relative lg:flex w-1/2 h-full items-center justify-center bg-gray-200'>
            <div className=' w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin'/>
            <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg' />
        </div>
    </div>
  )
}