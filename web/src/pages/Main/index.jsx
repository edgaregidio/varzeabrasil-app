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
            <span className="game-time">Classificado</span>
            <div className="row--pre-game">
              <img src={Lima} alt="Lima" />
              <h5 className="scoreboard-x">
                <span className="scoreboard">3</span>(5) x (3)
                <span className="scoreboard">3</span>
              </h5>
              <img src={Folia} alt="Folia" />
              {/* <h4 className="textFlashes">Bola rolando...</h4> */}
            </div>
            <h1>Deu Lima!</h1>
            <p>
              Em jogo muito dispultado e com muitos gols, Lima vence Folia nos
              penaltis e se classifica para a Semi Final da Primeiro edição Copa
              Cepro 2022.
            </p>

            <p>Ultimo jogo às 16h: Rendeção x G. Vila Nova</p>

            {/* TEMPO REAL  */}

            {/* <p className="game-details">🟥 - Cartão vermelhor </p>
            <p className="game-details">⚽ - Gol do  </p>
          <p className="game-details"> - Começa o segundo tempo!</p> */}
            {/* <p className="game-details">Fim do primeuro tempo</p> */}
            {/* <p className="game-details">🟥 - Expulsos </p> */}
            {/* <p className="game-details">🟨 - Cartão amarelo  </p> */}
            {/* <p className="game-details">Acabou, vamos para os penaltis! </p>
            <p className="game-details">⚽ - Gol do Folia, novo empate! </p>
            <p className="game-details">⚽ - Gol do Lima, virada!. </p>
            <p className="game-details">⚽ - Gol do Lima, mais um empate. </p> */}
            {/* <p className="game-details">⚽ - Gol do Folia </p> */}
            {/* <p className="game-details">⚽ - Gol do Lima </p> */}
            {/* <p className="game-details">10:53 - Apita o árbitro!</p> */}
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
