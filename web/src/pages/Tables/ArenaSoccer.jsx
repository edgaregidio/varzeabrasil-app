import React from 'react'
import './styles.css'
import RunningStilch from '../../components/TablesComponents/RunningStilch'

export default function ArenaSoccer() {
  return (
    <div>
      <section className="tables-games"></section>

      <section className="content-page-tables">
        <h1>Classificação 37º Power Ranking - Arena Soccer</h1>
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
        <h1>noticia</h1>
      </section>

      <div className="tables-games">{/* <GunnersMain /> */}</div>
    </div>
  )
}
