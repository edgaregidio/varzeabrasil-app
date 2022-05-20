import { IconContext, CaretLeft, CodesandboxLogo } from 'phosphor-react'
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Nav from '../../components/Nav'
import Supplier from '../../components/Supplier'

import './styles.css'

export default function Tables() {
  return (
    <>
      <div className="container-default" id="teste">
        <Nav />
        <section className="tables-camps">
          <div className="content-back">
            <IconContext.Provider
              value={{
                color: 'var(--secondary-color)',
                size: 32,
                weight: 'bold',
                cursor: 'pointer'
              }}
            >
              <CaretLeft onClick={() => navigate('/tables')} />
            </IconContext.Provider>
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
