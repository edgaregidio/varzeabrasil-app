import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { Link, useNavigate } from 'react-router-dom'

import './styles.css'

export default function Nav() {
  const [active, setActive] = useState(false)
  return (
    <nav className="nav">
      <div>
        <Link className="nav-logo" to="/">
          <Icon icon="majesticons:home-simple" className="nav-logo-icon" />
          <span className="nav-logo-name">Home</span>
        </Link>
        <div className="nav-list">
          <Link to="/tables" className="nav-link">
            <Icon
              icon="ic:baseline-table-chart"
              rotate={3}
              className="nav-logo-icon"
            />
            <span className="nav-link-name">Tabelas</span>
          </Link>
          <Link to="/news" className="nav-link">
            <Icon icon="ion:newspaper-sharp" className="nav-logo-icon" />
            <span className="nav-link-name">Notícias</span>
          </Link>
          <Link to="/contact" className="nav-link">
            <Icon icon="mdi:email" className="nav-logo-icon" />
            <span icon="ic:round-email" className="nav-link-name">
              Contato
            </span>
          </Link>
        </div>
      </div>
      <Link to="/login" className="nav-link ">
        <Icon icon="carbon:user-avatar-filled" className="nav-logo-icon" />
        <span className="nav-link-name">Login</span>
      </Link>
    </nav>
  )
}
