import React, { useState } from 'react'
import { CaretLeft, CaretRight } from 'phosphor-react'
import Nav from '../../components/Nav'
import QuarterFinals from '../../components/QuarterFinals'
import SemiFinal from '../../components/SemiFinal'
import Final from '../../components/Final'
import './styles.css'
import GunnersMain from '../../components/GunnersMain'

export default function CopaCepro() {
  const [count, setCount] = useState(2)
  return (
    <div>
      <section className="tables-games" id="#table">
        <div className="content-navigation">
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
        </div>
      </section>

      <section className="content-page-table">
        <h1>Tabela</h1>
        <div className="games-results">
          {count === 1 && <QuarterFinals />}
          {count === 2 && <SemiFinal />}
          {count === 3 && <Final />}
        </div>
      </section>

      <div className="tables-games">
        <GunnersMain />
      </div>
    </div>
  )
}
