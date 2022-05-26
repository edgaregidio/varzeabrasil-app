import { Icon } from '@iconify/react'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import CardCup from '../../components/CardCup'
import Supplier from '../../components/Supplier'
import CopaCepro from '../../assets/stadium/stadium3.jpg'
import ArenaSoccer from '../../assets/stadium/arenasoccer.jpg'

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
        <section className="select-card-cup">
          <span className="title-cup">1º Principais competições</span>
          <div className="main-hearts">
            <CardCup
              route={'tables/copacepro'}
              photo={CopaCepro}
              nameCup={'COPA CEPRO'}
              description={
                'Acompanhe aqui todas as notícias e tabelas da Copa Cepro 2022'
              }
            />
            <CardCup
              route={'tables/arenasoccer'}
              photo={ArenaSoccer}
              nameCup={'POWER RANKING - ARENA SOCCER'}
              description={
                'Acompanhe aqui todas as notícias e tabelas da 37° Power Ranking '
              }
            />
          </div>
        </section>
      </div>
      <footer>Copyright © 2022 EvoluTI - Todos os direitos reservados</footer>
    </>
  )
}
