import React, { useState } from 'react'

import Folia from '../../assets/folia.png'

import './styles.css'

const data = [
  { id: 1, name: 'Diogenys', function: 'Atacante', goals: 5 },
  { id: 2, name: 'Andre', function: 'Atacante', goals: 2 },
  { id: 3, name: 'Jefferson', function: 'Atacante', goals: 3 },
  { id: 4, name: 'Gabril', function: 'Atacante', goals: 4 },
  { id: 5, name: 'Junior', function: 'Atacante', goals: 7 },
  { id: 6, name: 'Flavio', function: 'Atacante', goals: 7 }
]

// array de jogadores ordenado
const ordened = data.sort(function (x, y) {
  return y.goals - x.goals
})

// array com as classificações
const classificacoes = []

// classificando os caras, passa em cada jogador
ordened.forEach((player, index) => {
  // pega os gols do jogador
  const goals = player.goals

  // verifica se já existe um objeto com essa quantidade de gols no array final
  const indexExists = classificacoes.findIndex(
    classificacao => classificacao.goals === goals
  )

  // quando nao existe ele cria uma posição no array com essa quantidade de gols apenas com esse cara
  if (indexExists === -1) {
    classificacoes.push({
      goals,
      players: [player]
    })
    return
  }

  // quando ja existe ele so vai empilhando os jogadores
  classificacoes[indexExists].players.push(player)
})

// console.log(mapped)

export default function GunnersMain() {
  function countRanking() {}
  return (
    <div className="container-table-gunners-temporary">
      <h2>Copa Cepro</h2>

      <div className="content-table-gunners-temporary">
        <h1>Principais Artilheros</h1>
        <h3>
          Ops...! Estamos trabalhando para colher todos os dados, espera mais um
          pouquinho que já já teremos todas as informações dos artilheiros da
          Copa Cepro.
        </h3>
      </div>

      {/* <div className="content-table-gunners">
        <h1>Principais Artilheros</h1>
        <div className="row-header">
          <h3>Ranking</h3>
          <h3>Gols</h3>
        </div>
        <div className="scroll-gunners">
          {classificacoes.map((classificacao, indexClassificacoes) =>
            classificacao.players.map((player, indexPlayer) => (
              <div key={indexPlayer} className="content-scroll">
                <div className="colls">
                  <h4>
                    * só joga a posição na tela quando for o primeiro jogador da classificação
                    {indexPlayer === 0 ? indexClassificacoes + 1 : ''}
                  </h4>
                  <div className="avatar-players" />
                  <img src={Folia} alt={Folia} />
                  <div className="content-names">
                    <h2>{player.name}</h2>
                    <p>{player.function}</p>
                  </div>
                </div>
                <div className="colls">
                  <h5>{player.goals}</h5>
                </div>
              </div>
            ))
          )}
        </div>
      </div> */}
    </div>
  )
}
