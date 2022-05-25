import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Nav from '../../components/Nav'
import Supplier from '../../components/Supplier'

import './styles.css'

export default function Tables() {
  const navigate = useNavigate()
  return (
    <>
      <div className="container-default" id="teste">
        <section className="tables-camps">
          <div className="content-back">
            <Icon
              icon="system-uicons:chevron-left"
              style={{
                fontSize: '2rem',
                color: 'var(--secondary-color)',
                cursor: 'pointer'
              }}
              onClick={() => navigate('/tables')}
            />
            <h1>Selecione um campeonato</h1>
          </div>
          <Supplier />
        </section>
        <Outlet />
      </div>
      <footer>Copyright © 2022 EvoluTI - Todos os direitos reservados</footer>
    </>
  )
}
