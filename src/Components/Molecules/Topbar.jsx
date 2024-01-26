import React from 'react';
import { ButtonsIcons } from './ButtonsIcons';
import { useShortPolling } from '../../../public/hooks/useShortPolling';

export const Topbar = ({ name, url }) => {

  const clienteEnLinea = useShortPolling();

  return (
    <>
      {url ? (
        <div className="flex mx-[40px] mt-[18px]">
          <img
            className="h-[45px] w-[45px] object-cover rounded-[35px]"
            src={url}
            alt=""
          />
          <div className="flex flex-col px-2">
            <h1 className="text-[#FFFFFF] font-bold">{name}</h1>
            <p className="text-[#ADB5BD] text-sm">Online</p>
          </div>
        </div>
      ) : (
        <div className="flex mx-[40px] mt-[18px]">
          <div className="flex flex-col px-2">
            <h1 className="text-[#FFFFFF] font-bold">{name}</h1>
            <p className="text-[#ADB5BD] text-sm font-bold">
              Personas en linea: 
             <span className=' font-light'> { clienteEnLinea} </span> 
            </p>
          </div>
        </div>
      )}

      <ButtonsIcons />
    </>
  );
};
