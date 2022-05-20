import React from 'react'
import { useNavigate } from 'react-router-dom'
import QuarterFinals from '../../components/QuarterFinals'
import GunnersMain from '../../components/GunnersMain'
import './styles.css'
import Nav from '../../components/Nav'

export default function Main() {
  const navigate = useNavigate()
  return (
    <div>
      <Nav />
      <section className="news">
        <div className="card-news">
          <h1>
            Flamengo encontra caminho pelo alto para tentar sair da pressão;
            Arão é destaque
          </h1>
          <p>Cinco dos últimos seis gols da equipe foram marcados de cabeça</p>
        </div>
      </section>
      <section className="tables">
        <div className="container-table">
          <h2>Copa Cepro</h2>
          <div className="content-table">
            <h1>Quartas de final</h1>
            <QuarterFinals />
            <button
              className="button-table"
              onClick={() => navigate('/tables')}
            >
              Ver tabela completa...
            </button>
          </div>
        </div>
        <GunnersMain />
      </section>
      <footer>Copyright © 2022 EvoluTI - Todos os direitos reservados</footer>
    </div>
  )
}
