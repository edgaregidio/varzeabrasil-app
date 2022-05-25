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
          <Icon icon="system-uicons:home" className="nav-logo-icon" />
          <span className="nav-logo-name">Home</span>
        </Link>
        <div className="nav-list">
          <Link to="/tables" className="nav-link">
            <Icon icon="system-uicons:table-header" className="nav-logo-icon" />
            <span className="nav-link-name">Tabelas</span>
          </Link>
          <Link to="/news" className="nav-link">
            <Icon icon="system-uicons:newspaper" className="nav-logo-icon" />
            <span className="nav-link-name">Notícias</span>
          </Link>
          <Link to="/asdasdasdas" className="nav-link">
            <Icon icon="system-uicons:table-header" className="nav-logo-icon" />
            <span className="nav-link-name">Hotel</span>
          </Link>
        </div>
      </div>
      <Link to="/login" className="nav-link ">
        <Icon icon="system-uicons:user-male-circle" className="nav-logo-icon" />
        <span className="nav-link-name">Login</span>
      </Link>
    </nav>
  )
}
