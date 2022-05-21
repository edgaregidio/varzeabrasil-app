import React from 'react'
import { useNavigate } from 'react-router-dom'
import QuarterFinals from '../../components/QuarterFinals'
import GunnersMain from '../../components/GunnersMain'
import './styles.css'
import Nav from '../../components/Nav'
import Ball from '../../assets/ball.png'

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
            <span className="game-time">ENCERRADO</span>
            <div className="row--pre-game">
              <img src={Tabajara} alt="Tabajara" />
              <h5 className="scoreboard-x">
                <span className="scoreboard">2</span>x
                <span className="scoreboard">1</span>
              </h5>
              <img src={Chopp} alt="Chopp" />
              {/* <h4 className="textFlashes">Acabou...</h4> */}
            </div>
            <h1>Time de Guerreiros!</h1>
            <p>
              Jogo com muitas expulsões, Tabajata vence Chopp FC e se classifica
              para semi-final da Copa Cepro
            </p>

            <p>
              Juiz expulsa 5 jogadores do banco e mais 2 em campo do Tabajara.
            </p>
            <p>Tabajara espera confronto para a Semi.</p>

            {/* <p className="game-details">🟥 - Cartão vermelhor - Vitinho</p>
            <p className="game-details">⚽ - Gol do Tabajara</p>
            <p className="game-details">⚽ - Gol do Chopp - Vinicius</p>
            <p className="game-details">17:10 - Começa o segundo tempo!</p> */}
            {/* <p className="game-details">Fim do primeuro tempo</p> */}
            {/* <p className="game-details">🟥 - Expulsos Flávio G. e Franchesco</p> */}
            {/* <p className="game-details">🟨 - Cartão amarelo Flávio Gabriel </p> */}
            {/* <p className="game-details">16:20 - Apita o árbitro!</p> */}
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
