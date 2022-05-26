import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import QuarterFinals from '../../components/QuarterFinals'
import SemiFinal from '../../components/SemiFinal'
import Final from '../../components/Final'
import './styles.css'
import GunnersMain from '../../components/GunnersMain'
import Supplier from '../../components/Supplier'
import { useNavigate } from 'react-router-dom'

export default function CopaCepro() {
  const [count, setCount] = useState(2)
  const navitage = useNavigate()
  return (
    <div className="content-page-tables">
      <section className="tables-camps">
        <div className="content-back">
          <Icon
            icon="system-uicons:chevron-left"
            style={{
              fontSize: '2rem',
              color: 'var(--primary-color-text)',
              cursor: 'pointer'
            }}
            onClick={() => navitage('/tables')}
          />
          <h1>Selecione um campeonato</h1>
        </div>
      </section>
      <h1>Copa Cepro 2022 1º Temporada</h1>
      <section className="">
        <div className="content-navigation">
          <Icon
            icon="system-uicons:chevron-left"
            style={{
              fontSize: '2rem',
              color: 'white',
              cursor: 'pointer'
            }}
            onClick={() => {
              if (count <= 1) {
                return null
              }
              if (count > 0) {
                setCount(count - 1)
              }
            }}
          />
          {count === 1 && <h1>Quartas de Final</h1>}
          {count === 2 && <h1>Semi Final</h1>}
          {count === 3 && <h1>Final</h1>}
          <Icon
            icon="system-uicons:chevron-right"
            style={{
              fontSize: '2rem',
              color: 'white',
              cursor: 'pointer'
            }}
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
        <div className="games-results-alt">
          {count === 1 && <QuarterFinals />}
          {count === 2 && <SemiFinal />}
          {count === 3 && <Final />}
        </div>
      </section>

      <div className="gunners-main-results">
        <GunnersMain />
      </div>
    </div>
  )
}
