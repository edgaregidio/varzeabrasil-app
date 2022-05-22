import React from 'react'
import CardTable from '../CardTable'

// import Lima from '../../assets/lima.png'
// import Folia from '../../assets/folia.png'
import Tabajara from '../../assets/tabajara.png'
// import Baxadao from '../../assets/baxadao.png'
// import Braavos from '../../assets/braavos.png'
// import Redencao from '../../assets/redencao.png'
// import GVilaNova from '../../assets/gvilanova.png'
import Shield from '../../assets/shield.png'

export default function SemiFinal() {
  return (
    <>
      <CardTable
        date={''}
        time={''}
        nameA={'Aguardando'}
        teamA={Shield}
        resultA={''}
        resultB={''}
        nameB={'Aguardando...'}
        teamB={Shield}
        phase={'semi 1'}
      />
      <CardTable
        date={''}
        time={''}
        nameA={'Aguardando...'}
        teamA={Shield}
        resultA={''}
        resultB={''}
        nameB={'Aguardando...'}
        teamB={Shield}
        phase={'semi 2'}
      />
    </>
  )
}
