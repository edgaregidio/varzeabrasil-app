import React from 'react'
import './styles.css'
import RunningStilch from '../../components/TablesComponents/RunningStilch'
import Tupamaros from '../../assets/tupamaros.jpeg'
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  HStack
} from '@chakra-ui/react'

export default function ArenaSoccer() {
  return (
    <div>
      <section className="content-page-tables-alt">
        <h1>Classificação 37º Power Ranking - Arena Soccer</h1>
        <span className="update-date">
          Atualizado dia: <strong>26/05/2022 às 17h00</strong>
        </span>
        <div className="games-results">
          <RunningStilch
            name={'Classificação'}
            games={'J'}
            victory={'V'}
            draw={'E'}
            defeat={'D'}
            proGoals={'GP'}
            ownGoals={'GC'}
            balance={'SG'}
            proGoalsAverage={'MGP'}
            AgaintsGolsAverage={'MGC'}
            use={'%'}
          />
        </div>
      </section>
      <section className="container-tags">
        <div className="content-tags">
          <div className="tag"></div>
          <h1 className="text-tag">Taça Ouro</h1>
          <div className="tag color-tag-silver"></div>
          <h1 className="text-tag">Taça Prata</h1>
          <div className="tag color-tag-bronze"></div>
          <h1 className="text-tag">Taça Bronze</h1>
        </div>
      </section>

      <section className="news-arena">
        <span className="title-news">
          De olho no topo, Tupamaros quer retormar lidença da 37º Power Ranking
          Arena Soccer!
          <p>Tupamaros bate o time da Holanda por 11 a 9</p>
        </span>
        <img src={Tupamaros} alt="Foto do time Tupamaros" />
        <span className="paragraph-news">
          <p>
            Jogo que começou pegando fogo 🔥 com a equipe do holanda bem
            Encaixada abriu 3x1😎 depois 5x2, só que fizeram umas mexidas
            erradas Time caiu de produção 😅 aí com a entrada do arão na equipe
            do Tupamaros sua equipe melhorou 👏🏻👏🏻 chegou mais no ataque
            conseguiram Empatar 6x6 😎 depois 7x7 🔥🔥 tupamaros passou a frente
            de novo 8x7 🔥🔥 leonardo empatou de novo 8x8, otavio brilhou mais o
            lucas Abriram mais 3 gols 👏🏻👏🏻 holanda ainda diminuiu no final mais
            já Estava garantido a coca para a equipe do tupamaros 👏🏻👏🏻 grande
            jogo Dessas duas equipes
          </p>
          <br />
          <p>
            Destaque da equipe do holanda júlio jogou fácil, quando sentiu o
            tornozelo sua equipe caiu de produção, aquino catou de mais 👏🏻👏🏻👏🏻
            leonardo sem dúvida foi o melhor da sua equipe jogou de mais 4 gols
            e 4 assistência deu trabalho de mais no ataque 👏🏻👏🏻👏🏻
          </p>
          <br />
          <p>
            Destaque da equipe do tupamaros vagner goleiro catou de mais 👏🏻👏🏻👏🏻
            Grande responsável pela vitória da sua equipe, lucas 2 gols vários
            Desarmes e várias assistência 👏🏻👏🏻👏🏻 jogou de mais lá atrás 🙅🏻‍♂️
            otavio Sem dúvidas o melhor do jogo 5 gols + assistências jogou o
            fino, o Melhor da partida 👏🏻👏🏻👏🏻 parabéns as duas equipes 👏
          </p>
        </span>
        <div className="tags-teams">
          <Tag marginRight={2}>Holanda</Tag>
          <Tag>Tupamaros</Tag>
        </div>
      </section>

      <div className="tables-games">{/* <GunnersMain /> */}</div>
    </div>
  )
}
