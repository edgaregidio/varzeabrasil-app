import React from 'react'
import TabajaraChopp from '../../assets/tabajara2x1chopp.jpeg'
import LimaFolia from '../../assets/lima3x3folia.jpeg'
import SemiCopaCepro from '../../assets/semicopacepro.jpeg'
import ArenaSoccer from '../../assets/stadium/arenasoccer.jpg'

import './styles.css'

const newsOrder = [
  {
    id: 1,
    img: TabajaraChopp,
    nameCamp: 'Copa Cepro',
    title: 'Braavos Classificado',
    description:
      'Pelo segundo jogo das quartas, Braavos vence o Baxadão e avança',
    route: '/table/copacepro',
    alt: 'Imagem da noticia x'
  },
  {
    id: 2,
    img: LimaFolia,
    nameCamp: 'Copa Cepro',
    title: 'Deu Lima',
    description:
      'Jogo com muito empate e virada, Lima vence o Folia nos penaltis e se classifica.',
    route: '/table/copacepro',
    alt: 'Imagem da noticia y'
  },
  {
    id: 3,
    img: TabajaraChopp,
    nameCamp: 'Copa Cepro',
    title: 'Geração Vila Nova bate o Redenção',
    description:
      'Em jogo de 10 gols, o Geração Vila Nova sofre 4 gols mas faz 6...',
    route: '/table/copacepro',
    alt: 'Imagem da noticia y'
  },
  {
    id: 4,
    img: LimaFolia,
    nameCamp: 'Copa Cepro',
    title: 'Copa Cepro: 2 Confrontos da Semi definidos',
    description:
      'Copa Cepro 2022 tem sorteios e confrontos definidos e serão disputados nos dias 28 e 29 no estádio Filostro Machado (Arena Muranga).',
    route: '/table/copacepro',
    alt: 'Imagem da noticia y'
  },
  {
    id: 5,
    img: ArenaSoccer,
    nameCamp: 'Copa Cepro',
    title: '37º Power Ranking Arena Soccer agitada!',
    description:
      ' Tupamaros bate o time da Holanda por 11 a 9 mas perder liderança por número de jogos.',
    route: '/table/arenasoccer',
    alt: 'Imagem da noticia y'
  }
]

newsOrder.sort(function (x, y) {
  return y.id - x.id
})

export default function CardNews() {
  return (
    <section className="container-card-news">
      <h1>Acompanhe</h1>
      {newsOrder.map((item, index) => (
        <div className="content-card-news">
          <img src={item.img} alt={item.alt} />
          <div className="content-text-card-news">
            <div>
              <h1>{item.nameCamp}</h1>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
