import React from 'react'
import { useNavigate } from 'react-router-dom'
import QuarterFinals from '../../components/QuarterFinals'
import GunnersMain from '../../components/GunnersMain'
import './styles.css'
import Nav from '../../components/Nav'
import Ball from '../../assets/ball.png'

import Lima from '../../assets/lima.png'
import Folia from '../../assets/folia.png'

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
              <img src={Lima} alt="Tabajara" />
              <h5 className="scoreboard-x">
                <span className="scoreboard"></span>x
                <span className="scoreboard"></span>
              </h5>
              <img src={Folia} alt="Chopp" />
              <h4 className="textFlashes">Pré-jogo...</h4>
            </div>
            <h1>Mais uma decisão!</h1>
            <p>
              Duas grandes equipes fazem o terceiro jogo das quartas de final em
              jogo único
            </p>

            <p>Quem vai passar?</p>

            {/* <p className="game-details">🟥 - Cartão vermelhor </p>
            <p className="game-details">⚽ - Gol do  </p>
            <p className="game-details">⚽ - Gol do  </p>
            <p className="game-details"> - Começa o segundo tempo!</p> */}
            {/* <p className="game-details">Fim do primeuro tempo</p> */}
            {/* <p className="game-details">🟥 - Expulsos </p> */}
            {/* <p className="game-details">🟨 - Cartão amarelo  </p> */}
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
