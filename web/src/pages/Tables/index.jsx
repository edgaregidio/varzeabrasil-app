import { Icon } from '@iconify/react'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Supplier from '../../components/Supplier'

import './styles.css'

export default function Tables() {
  const navigate = useNavigate()
  return (
    <>
      <div className="container-default">
        <section className="tables-camps">
          <div className="content-back">
            <Icon
              icon="system-uicons:chevron-left"
              style={{
                fontSize: '2rem',
                color: 'var(--primary-color-text)',
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
