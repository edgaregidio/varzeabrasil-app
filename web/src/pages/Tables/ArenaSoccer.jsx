import React from 'react'
import './styles.css'
// import GunnersMain from '../../components/GunnersMain'
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

      <div className="tables-games">{/* <GunnersMain /> */}</div>
    </div>
  )
}
