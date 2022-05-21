import React from 'react'
import { useNavigate } from 'react-router-dom'
import QuarterFinals from '../../components/QuarterFinals'
import GunnersMain from '../../components/GunnersMain'
import './styles.css'
import Nav from '../../components/Nav'

import Tabajara from '../../assets/tabajara.png'
import Chopp from '../../assets/chopp.png'

export default function Main() {
  const navigate = useNavigate()

  return (
    <>
      <div className="container-default">
        <Nav />
        <section className="news">
          <div className="card-news">
            <span className="game-time">Times se preparando</span>
            <div className="row--pre-game">
              <img src={Tabajara} alt="Tabajara" />
              <h5 className="scoreboard-x">
                <span className="scoreboard"></span>x
                <span className="scoreboard"></span>
              </h5>
              <img src={Chopp} alt="Chopp" />
              <h4 className="textFlashes">Pré Jogo...</h4>
            </div>
            <h1>Dia de decisão!</h1>
            <p>
              Tabajara JR10 e Chopp abrem as quartas de final hoje no Estádio
              Filostro Machado (Muranga) às 16h.
            </p>
          </div>
        </section>
        <section className="container"></section>
        <section className="tables">
          <div className="container-table">
            <h2>Copa Cepro</h2>
            <div className="content-table">
              <h1>Quartas de final</h1>
              <QuarterFinals />
              <button
                className="button-table"
                onClick={() => navigate('/tables/copacepro')}
              >
                <a href="#table">Ver tabela completa...</a>
              </button>
            </div>
          </div>
          <GunnersMain />
        </section>
        <footer>Copyright © 2022 EvoluTI - Todos os direitos reservados</footer>
      </div>
    </>
  )
}
