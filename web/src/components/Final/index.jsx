import React from 'react'
import CardTable from '../CardTable'

import Lima from '../../assets/lima.png'
import GVilaNova from '../../assets/gvilanova.png'
// import Shield from '../../assets/shield.png'

export default function Final() {
  return (
    <>
      <CardTable
        date={'DOM 06/05/2022'}
        time={''}
        nameA={'Lima FC'}
        teamA={Lima}
        resultA={''}
        resultB={''}
        nameB={'G. Vila Nova'}
        teamB={GVilaNova}
        live={''}
        phase={'Final'}
      />
    </>
  )
}
