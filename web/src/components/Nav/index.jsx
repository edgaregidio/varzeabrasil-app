import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logovb.png'

import './styles.css'

export default function Nav() {
  const navigate = useNavigate()
  return (
    <nav>
      <img src={Logo} alt="Logo Varzea Brasil" onClick={() => navigate('/')} />
    </nav>
  )
}
