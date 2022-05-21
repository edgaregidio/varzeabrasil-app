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
            <span className="game-time">2° Tempo</span>
            <div className="row--pre-game">
              <img src={Tabajara} alt="Tabajara" />
              <h5 className="scoreboard-x">
                <span className="scoreboard">2</span>x
                <span className="scoreboard">1</span>
              </h5>
              <img src={Chopp} alt="Chopp" />
              <h4 className="textFlashes">Bola Rolando...</h4>
            </div>
            <h1>O jogo esquenta!</h1>
            {/* <p>
              Tabajara JR10 e Chopp abrem as quartas de final hoje no Estádio
              Filostro Machado (Arena Muranga) às 16h.
            </p>
            <br />
            <p>Acomanhe em tempo real aqui no Varzea Brasil!</p> */}

            <p className="game-details">🟥 - Cartão vermelhor - Vitinho</p>
            <p className="game-details">⚽ - Gol do Tabajara</p>
            <p className="game-details">⚽ - Gol do Chopp - Vinicius</p>
            <p className="game-details">17:10 - Começa o segundo tempo!</p>
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
