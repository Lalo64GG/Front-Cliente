import React from 'react'
import { MenssageOut } from '../Atoms/MenssageOut'
import { MenssageIn } from '../Atoms/MenssageIn'

export const Menssage = () => {
  return (
    <div className='bg-[#010409] overflow-y-auto'>
        <MenssageIn />
        <MenssageOut />
    </div>
  )
}
