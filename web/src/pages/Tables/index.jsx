import { IconContext, CaretLeft } from 'phosphor-react'
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Nav from '../../components/Nav'
import Supplier from '../../components/Supplier'

import './styles.css'

export default function Tables() {
  const navigate = useNavigate()

  return (
    <>
      <div className="container-default">
        <Nav />
        <section className="tables-camps">
          <div className="content-back">
            <IconContext.Provider
              value={{
                color: 'var(--secondary-color)',
                size: 32,
                weight: 'bold'
              }}
            >
              <CaretLeft onClick={() => navigate(-1)} />
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
