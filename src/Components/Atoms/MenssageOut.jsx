import React, { useState, useEffect } from 'react'
import  useLongPolling  from '../../../public/hooks/useLongPolling'

export const MenssageOut = ({id}) => {
  const [ data, setData ] = useState();

  const datos  = useLongPolling("http://localhost:4000/messages/message/nuevo");

  useEffect(() => {
    const message = async ()=>{
      const res = await fetch(`http://localhost:4000/messages/${id}`);
      const response = await res.json();
      console.log("Esto es de response",response);
      setData(response);
    }
    message();
  },[id])

  useEffect(()=> {
    const message = async ()=>{
      const res = await fetch(`http://localhost:4000/messages/${id}`);
      const response = await res.json();
      console.log("Esto es de response",response);
      setData(response);
    }
    message();
  },[datos])

  console.log(" messageOut", data);
  return (
    <>
      { data && data.message ? (
        <div className=''>
          { data.message.map( (messages) =>(
             <div className='mt-[18px]'>
             <div
             className="p-2 rounded-lg"
             style={{
               background: "url(/img/message1.svg)",
               backgroundRepeat: "no-repeat",
               backgroundSize: "20rem",
               backgroundPosition: "right",
             }}
           >
             <span className=" text-justify pr-14">{ messages.content }</span>
             <div className="text-xs flex justify-end mr-4 mt-4">
               11:35 AM{" "}
               <span className="ml-2 mt-1">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="15"
                   height="8"
                   viewBox="0 0 15 8"
                   fill="none"
                 >
                   <path
                     d="M9.80839 0.634318L3.57705 7.49125L0.538385 4.58493"
                     stroke="#0099F7"
                     stroke-width="0.870334"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                   />
                   <path
                     d="M14.1133 0.633246L7.88166 7.49054L5.62217 5.35049"
                     stroke="#0099F7"
                     stroke-width="0.870334"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                   />
                 </svg>
               </span>
             </div>
           </div>
             </div>
          ) ) }
        </div>
      ): (<div></div>)}
    </>
  )
}
