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

export default function QuarterFinals() {
  return (
    <>
      <CardTable
        date={'SAB 21/05/2022'}
        time={'16h00'}
        nameA={'Tabajara'}
        teamA={Tabajara}
        resultA={'0'}
        resultB={'0'}
        nameB={'Chopp'}
        teamB={Chopp}
        live={'A bola vai rolar...'}
        phase={'quartas 1'}
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
        phase={'quartas 2'}
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
        phase={'quartas 3'}
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
        phase={'quartas 4'}
      />
    </>
  )
}
