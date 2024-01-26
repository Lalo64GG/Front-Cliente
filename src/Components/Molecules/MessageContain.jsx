import React from 'react'
import { FrecuentChat } from './FrecuentChat'
import { Grupo } from './Grupo'

export const MessageContain = ({ setId, setIdReceiver }) => {
  

  return (
    <div >
        <FrecuentChat setId = { setId } setIdReceiver = { setIdReceiver } />
    </div>
  )
}
