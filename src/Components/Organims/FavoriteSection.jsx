import React from 'react'
import { Seeker } from '../Atoms/Seeker'
import { ContentCard } from '../Molecules/ContentCard'

export const FavoriteSection = () => {
  return (
   <section  className='overflow-y-auto w-[320px]' style={{
    background: 'linear-gradient(180deg, #212529 0%, rgba(33, 37, 41, 0.00) 100%)',
    backgroundColor: '#010409'
  }}>
    <Seeker section={ "Favorites" }/>
    <div style={{ marginTo: '110' }}>
      <p className='text-[#ADB5BD]' style={{ fontSize: '14px', marginTop: '4px', fontWeight: '600', marginLeft: '25px' }}>Recientes</p>
      <ContentCard/>
      
    </div>
   </section>
  )
}
