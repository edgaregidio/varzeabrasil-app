import React, { useState } from 'react'
import { Icon } from '@iconify/react'

import './styles.css'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav'

import Logo from '../../assets/logovb.png'

// import { Container } from './styles';

function Siderbar() {
  const [show, setShow] = useState(false)

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null} `}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <Icon icon="system-uicons:menu-hamburger" className="menu-pd" />
        </div>
        <img src={Logo} alt="Logomarca Varzea Brasil" className="logo-vb" />
      </header>
      <aside className={`sidebar ${show ? 'show' : null}`}>
        <Nav />
      </aside>
      <Outlet />
    </main>
  )
}

export default Siderbar
