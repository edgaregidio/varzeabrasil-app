import React from 'react'
import CardTable from '../CardTable'

import Lima from '../../assets/lima.png'
import Folia from '../../assets/folia.png'
import Chopp from '../../assets/chopp.png'
import Tabajara from '../../assets/tabajara.png'
import Baxadao from '../../assets/baxadao.png'
import Braavos from '../../assets/braavos.png'
import Redencao from '../../assets/redencao.png'
import GVilaNova from '../../assets/gvilanova.png'

import './styles.css'

export default function TableMain() {
  return (
    <div className="container-table">
      <h2>Copa Cepro</h2>
      <div className="content-table">
        <h1>Quartas de finail</h1>
        <CardTable
          date={'SAB 21/05/2022'}
          time={'16h00'}
          nameA={'Tabajara'}
          teamA={Tabajara}
          resultA={''}
          resultB={''}
          nameB={'Chopp'}
          teamB={Chopp}
        />
        <CardTable
          date={'DOM 22/05/2022'}
          time={'08h00'}
          nameA={'Baxadão'}
          teamA={Baxadao}
          resultA={''}
          resultB={''}
          nameB={'Braavos'}
          teamB={Braavos}
        />
        <CardTable
          date={'DOM 22/05/2022'}
          time={'10h00'}
          nameA={'Lima'}
          teamA={Lima}
          resultA={''}
          resultB={''}
          nameB={'Folia'}
          teamB={Folia}
        />
        <CardTable
          date={'DOM 22/05/2022'}
          time={'16h00'}
          nameA={'Redenção'}
          teamA={Redencao}
          resultA={''}
          resultB={''}
          nameB={'G. Vila Nova'}
          teamB={GVilaNova}
        />
      </div>
    </div>
  )
}
