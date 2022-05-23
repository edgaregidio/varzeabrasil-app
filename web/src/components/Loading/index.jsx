import { CircleNotch, IconContext } from 'phosphor-react'
import React from 'react'

import './styles.css'

export default function Loading() {
  return (
    <div className="content-loading">
      <IconContext.Provider
        value={{
          width: '4rem',
          height: '4rem'
        }}
      >
        <CircleNotch />
      </IconContext.Provider>
    </div>
  )
}
