import { Topbar } from './Topbar';
import { MenssageIn } from '../Atoms/MenssageIn';
import { MenssageOut } from '../Atoms/MenssageOut';
import { InputBar } from './InputBard';
import { useGetIdMessage } from '../../../public/hooks/useGetIdMessage';
import useLongPolling from '../../../public/hooks/useLongPolling';
import { useEffect, useState } from 'react';

export const Section = ({ id }) => {
  console.log("id:", id);

  const token = localStorage.getItem('token');

  console.log(token);

  const [ data, setData ] = useState();
  const [ name, setName ] = useState();

  const long  = useLongPolling("http://localhost:4000/messages/message/nuevo", {
    extraHeaders: {
      Authorization: `${token}`,
    },});

  useEffect(() => {
    const message = async ()=>{
      const res = await fetch(`http://localhost:4000/messages/${id}`, {
        extraHeaders: {
          Authorization: ` ${token}`
        },});
      const response = await res.json();
      console.log("Esto es de response",response);
      setData(response);
    }
    message();
  },[id])

  useEffect(()=> {
    const message = async ()=>{
      const res = await fetch(`http://localhost:4000/messages/${id}`, {
        extraHeaders: {
          Authorization: ` ${token}`
        },});
      const response = await res.json();
      console.log("Esto es de response",response);
      setData(response);
    }
    message();
  },[long])

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
          <Topbar url={"/img/Ellipse 251.svg"} name={data.message.length > 0 ? data.message[0].sender_name: ''} />
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

          <div className="py-3 px-[34px] h-fit">
            <InputBar idReceiver = {data.message.length > 0 ? data.message[0].receiver_id: '' } name={data.message.length > 0 ? data.message[0].receiver_name: ''} idSender = {id } sender_name={data.message.length > 0 ? data.message[0].sender_name: ''}   />
          </div>
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
