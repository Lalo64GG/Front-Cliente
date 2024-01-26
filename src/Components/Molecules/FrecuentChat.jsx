import React from 'react'
import { CardMessage } from '../Atoms/CardMessage'
import { useGetProgrammers } from '../../../public/hooks/useGetProgrammers'

export const FrecuentChat = ({ setId, setIdReceiver }) => {

  const { data } = useGetProgrammers();
  console.log("chats",data);


  const handleCardClick = (idSender) => {
    // Puedes redirigir o hacer lo que necesites con el id
    console.log("ID seleccionado:", idSender);
    setId(idSender);
    
  };

  return (
   <>
     <p className='text-[#ADB5BD]' style={{ fontSize: '14px', marginTop: '4px', fontWeight: '600', marginLeft: '25px' }}>Chats</p>
     { data?.map((programmer, index) => (
      <CardMessage key={index} name={ programmer.name } onClick={() => handleCardClick(programmer.id)  }  url ={ "/img/Ellipse 251.svg" }/> 
     ))}   
   </>
  )
}
