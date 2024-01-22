import { Topbar } from './Topbar';
import { MenssageIn } from '../Atoms/MenssageIn';
import { MenssageOut } from '../Atoms/MenssageOut';
import { InputBar } from './InputBard';
import { useGetIdMessage } from '../../../public/hooks/useGetIdMessage';
import useLongPolling from '../../../public/hooks/useLongPolling';
import { useEffect, useState } from 'react';

export const Section = ({ id }) => {
  console.log("id:", id);

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

  return (
    <section
      className="grid max-h-[100vh]"
      style={{
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      {data && data.message && data.message.length !== 0  ? (
        <>
          <nav className=" bg-[#010409] h-[75px] flex items-center justify-between ">
          <Topbar name={data.message.length > 0 ? data.message[0].sender_name: ''} />
          </nav>

          <div className="bg-[#010409] overflow-y-auto">

            {data.message.map((message, index) => (
              <MenssageIn
                key={index}
                name={message.sender_name}
                content={message.content}
              />
            ))}
            <div className="flex justify-end mb-6 mr-5">
            <MenssageOut id = { data.message[0].receiver_id } />
            </div>
           
          </div>

          <form className="py-3 px-[34px] h-fit">
            <InputBar />
          </form>
        </>
      ) : (
        <div>
          <h1 className="text-white text-center py-4">
            Seleccione un chat para comenzar
          </h1>
        </div>
      )}
    </section>
  );
};
