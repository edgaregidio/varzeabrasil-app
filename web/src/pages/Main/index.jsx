import React from 'react'
import { useNavigate } from 'react-router-dom'
import SemiFinal from '../../components/SemiFinal'
import GunnersMain from '../../components/GunnersMain'
import './styles.css'
import Nav from '../../components/Nav'

import Lima from '../../assets/lima.png'
import Folia from '../../assets/folia.png'
import CardNews from '../../components/CardNews'
import Siderbar from '../../components/Siderbar'

export default function Main() {
  const navigate = useNavigate()

  return (
    <div>
      {/* <Siderbar /> */}
      <div className="container-default">
        <section className="news">
          <div className="card-news">
            {/* <span className="game-time">Classificado</span> */}
            <div className="row--pre-game">
              <img src={Lima} alt="Lima" />
              <h5 className="scoreboard-x">
                <span className="scoreboard">3</span>(5) x (3)
                <span className="scoreboard">3</span>
              </h5>
              <img src={Folia} alt="Folia" />
              {/* <h4 className="textFlashes">Bola rolando...</h4> */}
            </div>
            <h1>Copa Cepro: 2 Confrontos da Semi definidos</h1>
            <p>
              Copa Cepro 2022 tem sorteios e confrontos definidos que serão
              disputados nesse próximo final de semana (28 e 29) no estádio
              Filostro Machado (Arena Muranga).
            </p>
            <p>🎲 Lima FC enfrenta Braavos</p>
            <p>🎲 Tabajara recebe o G. Vila Nova.</p>

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

        <section className="tables">
          <div className="content-news">
            <h2>Principais noticias</h2>
            <CardNews />
          </div>
          <div className="container-table">
            <div>
              <h2>Copa Cepro</h2>
              <div className="content-table">
                <h1>Semi final</h1>
                <SemiFinal />
                <button
                  className="button-table"
                  onClick={() => navigate('/tables/copacepro')}
                >
                  <a href="#table">Ver tabela completa...</a>
                </button>
              </div>
            </div>
            <GunnersMain />
          </div>
        </section>
        <footer>Copyright © 2022 EvoluTI - Todos os direitos reservados</footer>
      </div>
    </div>
  )
}
