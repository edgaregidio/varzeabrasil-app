import { CircleNotch, IconContext } from 'phosphor-react'
import React from 'react'

import './styles.css'

export default function Loading() {
  return (
    <div className="content-loading">
      <IconContext.Provider
        value={{
          width: '3rem',
          height: '3rem'
        }}
      >
        <CircleNotch />
      </IconContext.Provider>
    </div>
  )
}
