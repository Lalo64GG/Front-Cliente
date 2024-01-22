import React from 'react'
import { FrecuentChat } from './FrecuentChat'

export const MessageContain = ({ setId, setIdReceiver }) => {
  

  return (
    <div >
        <FrecuentChat setId = { setId } setIdReceiver = { setIdReceiver } />
        {/* <DirectMessages/> */}
    </div>
  )
}
