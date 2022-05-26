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
import { Icon } from '@iconify/react'

export default function Main() {
  const navigate = useNavigate()

  return (
    <div>
      {/* <Siderbar /> */}
      <div className="container-default">
        <section
          className="news"
          onClick={() => navigate('/tables/arenasoccer')}
        >
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
            <h1>37º Power Ranking Arena Soccer agitada!</h1>
            <br></br>
            <p>
              Tupamaros bate o time da Holanda por 11 a 9 mas perder liderança
              por número de jogos.
            </p>
            <p>Bope pega lidença por 1 jogo a mais que Tupamaros</p>

            {/* TEMPO REAL  */}

            {/* <p className="game-details">🟥 - Cartão vermelhor </p>
            {/* <p className="game-details">🟨 - Cartão amarelo  </p> */}
            {/* <p className="game-details">⚽ - Gol do Folia, novo empate! </p> */}
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

                <div className="container-button">
                  <button
                    className="content-button"
                    onClick={() => navigate('/tables/copacepro')}
                  >
                    <a href="#table">Ver tabela completa</a>
                    <Icon
                      icon="bx:right-arrow-alt"
                      color="var(--primary-color-text)"
                    />
                  </button>
                </div>
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
