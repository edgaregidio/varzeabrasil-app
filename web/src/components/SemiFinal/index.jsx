import React from 'react'
import CardTable from '../CardTable'

import Lima from '../../assets/lima.png'
import BraavosBlack from '../../assets/braavosblack.png'
import Tabajara from '../../assets/tabajara.png'
import GVilaNova from '../../assets/gvilanova.png'

export default function SemiFinal() {
  return (
    <>
      <CardTable
        date={'SAB 28/05/2022'}
        time={'16h00'}
        nameA={'Lima FC'}
        teamA={Lima}
        resultA={'1'}
        resultB={'0'}
        nameB={'Braavos'}
        teamB={BraavosBlack}
        live={'Encerrado'}
        phase={'semi 1'}
      />
      <CardTable
        date={'DOM 29/05/2022'}
        time={'10h00'}
        nameA={'Tabajara JR10'}
        teamA={Tabajara}
        resultA={''}
        resultB={''}
        nameB={'G. Vila Nova'}
        teamB={GVilaNova}
        live={'Bola rolando'}
        phase={'semi 2'}
      />
    </>
  )
}
