import React, { useState } from 'react'

import Shield from '../../assets/shield.png'
import Tabajara from '../../assets/tabajara.png'
import Avatar from '../../assets/avatar.png'
import AndreTeodoro from '../../assets/players/andreteodoro.jpeg'

import './styles.css'

const data = [
  {
    id: 1,
    name: 'Leonardo Nero',
    function: 'Atacante',
    goals: 7,
    photo: Shield,
    avatar: Avatar
  },
  {
    id: 2,
    name: 'André Teodoro',
    function: 'Atacante',
    goals: 8,
    photo: Shield,
    avatar: AndreTeodoro
  },
  {
    id: 3,
    name: 'Afonso Custódio',
    function: 'Atacante',
    goals: 5,
    photo: Shield,
    avatar: Avatar
  },
  {
    id: 4,
    name: 'Alex da Silva',
    function: 'Atacante',
    goals: 5,
    photo: Shield,
    avatar: Avatar
  },
  {
    id: 5,
    name: 'Carlos Eduardo',
    function: 'Atacante',
    goals: 4,
    photo: Shield,
    avatar: Avatar
  },
  {
    id: 6,
    name: 'Flávio Gabriel ',
    function: 'Atacante',
    goals: 7,
    photo: Tabajara,
    avatar:
      'https://www.ogol.com.br/img/jogadores/63/702263_med__20200914231928_flavio_gabriel.jpg'
  },
  {
    id: 6,
    name: 'Jayme Bruno',
    function: 'Meio-Campo',
    goals: 4,
    photo: Shield,
    avatar: Avatar
  },
  {
    id: 6,
    name: 'Murilo Cavalcante',
    function: 'Atacante',
    goals: 4,
    photo: Tabajara,
    avatar: Avatar
  },
  {
    id: 6,
    name: 'Carlos Robston',
    function: '',
    goals: 4,
    photo: Shield,
    avatar: Avatar
  },
  {
    id: 6,
    name: 'Arthur Alcântara',
    function: '',
    goals: 4,
    photo: Shield,
    avatar: Avatar
  },
  {
    id: 6,
    name: 'Rafael Cedro',
    function: 'Atacante',
    goals: 6,
    photo: Tabajara,
    avatar: Avatar
  }
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
  const photo =
    'https://i.pinimg.com/564x/bf/2c/d3/bf2cd3e35b1c81096c4567fbab465abb.jpg'
  return (
    <div className="container-table-gunners">
      <h2>Copa Cepro</h2>

      {console.log(photo)}

      <div className="content-table-gunners">
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
                    {/* * só joga a posição na tela quando for o primeiro jogador da classificação */}
                    {indexPlayer === 0 ? indexClassificacoes + 1 : ''}
                  </h4>
                  {/* {console.log(player.photo)} */}
                  <img
                    src={player.avatar}
                    alt="Foto do Jogador"
                    className="avatar-players"
                  />
                  <img
                    src={player.photo}
                    alt="Escuto do time que o jogador trabalha"
                    className="shield-player"
                  />
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
      </div>
    </div>
  )
}
