import React from 'react'
import './styles.css'
// import GunnersMain from '../../components/GunnersMain'
import RunningStilch from '../../components/TablesComponents/RunningStilch'

export default function ArenaSoccer() {
  // const [count, setCount] = useState(2)
  return (
    <div>
      <section className="tables-games">
        {/* <div className="content-navigation">
          <CaretLeft
            cursor={'pointer'}
            size={32}
            onClick={() => {
              if (count <= 1) {
                return null
              }
              if (count > 0) {
                setCount(count - 1)
              }
            }}
          ></CaretLeft>
          {count === 1 && <h1>Quartas de Final</h1>}
          {count === 2 && <h1>Semi Final</h1>}
          {count === 3 && <h1>Final</h1>}
          <CaretRight
            cursor={'pointer'}
            size={32}
            onClick={() => {
              if (count >= 3) {
                return null
              }
              setCount(count + 1)
            }}
          />
        </div> */}
      </section>

      <section className="content-page-table">
        <h1>Classificação 37º Power Ranking - Arena Soccer</h1>
        <div className="games-results">
          <RunningStilch
            name={'Times'}
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
