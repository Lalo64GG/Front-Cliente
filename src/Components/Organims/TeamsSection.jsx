import React, { useState } from 'react'
import { Seeker } from '../Atoms/Seeker'
import { CardMessage } from '../Atoms/CardMessage'

export const TeamsSection = ({ setChatId }) => {


 
  const chat = [
    {
      name:"Chat Global",
      id:1
    },
    {
      name: "Grupo Programadores",
      id:2
    }
  ]

  const handleCardClick = (idChat) => {
    // Puedes redirigir o hacer lo que necesites con el id
    console.log("ID seleccionado:", idChat);
    setChatId(idChat);
    
  };

  return (
    <section className='overflow-y-auto w-[320px]' style={{
        background: 'linear-gradient(180deg, #212529 0%, rgba(33, 37, 41, 0.00) 100%)',
        backgroundColor: '#010409'
    }}>
        <Seeker section={ " Community" }/>
        <p className='text-[#ADB5BD]' style={{ fontSize: '14px', marginTop: '4px', fontWeight: '600', marginLeft: '25px' }}>Grupos</p>
          {
            chat.map( chat => (
              <CardMessage id={chat.id} name={chat.name} url={"/svg/react 1.svg"}  onClick={() => handleCardClick(chat.id)  }/>
            ))
          }

    </section>
  )
}
