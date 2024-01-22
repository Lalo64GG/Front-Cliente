import { useState } from 'react'
import { Navbar } from './Components/Molecules/navbar'
import {Section} from './Components/Molecules/Section'
import { FavoriteSection } from './Components/Organims/FavoriteSection';
import { ProfileSection } from './Components/Organims/ProfileSection';
import { MessageSection } from './Components/Organims/MessageSection';
import { TeamsSection } from './Components/Organims/TeamsSection';

function App() {
  const [sectionactual, setSectionActual] = useState(1);
  const [idSender, setId] = useState(0);
  const [idReceiver, setIdReceiver] = useState();

   const sections = [
    <ProfileSection />,
    <MessageSection setId={setId} setIdReceiver= { setIdReceiver } />,
    <TeamsSection />,
    <FavoriteSection />,
  ];


  return (
    <>
    <main className=" h-screen grid text-slate-50 bg-[#010409]"
      style={{
        gridTemplateColumns: "auto auto 1fr",
      }}>
      <Navbar sectionactual={sectionactual} setSectionActual={ setSectionActual } />
      {sections[sectionactual]}
      {   console.log(idSender) }

      <Section id = { idSender} />
    </main>
    </>
  )
}

export default App
