import React, { useEffect, useState } from 'react'
import api from '../../../api'

import './styles.css'

export default function RunningStilch({
  name,
  games,
  victory,
  draw,
  defeat,
  proGoals,
  ownGoals,
  balance,
  proGoalsAverage,
  AgaintsGolsAverage,
  use
}) {
  const [table, setTable] = useState([])
  const [libert, setLibert] = useState()

  console.log({ libert })

  useEffect(() => {
    api.get('/arenasoccer').then(async data => {
      setTable(await data.data)
    })
  }, [])

  const order = table.sort((a, b) => {
    return b.victory - a.victory
  })

  return (
    <section className="container-running-stilch">
      <div>
        <table>
          <thead>
            <th></th>
            <th className="col-name">{name}</th>
            <th>{games}</th>
            <th>{victory}</th>
            <th className="disable-media">{draw}</th>
            <th className="disable-media">{defeat}</th>
            <th className="disable-media">{proGoals}</th>
            <th className="disable-media">{ownGoals}</th>
            <th>{balance}</th>
            <th className="disable-media">{proGoalsAverage}</th>
            <th className="disable-media">{AgaintsGolsAverage}</th>
            <th>{use}</th>
          </thead>
          <tbody>
            {order.map((item, index) => (
              <tr>
                <td onClick={e => setLibert(e.target.value)}>{index + 1}</td>
                <td className="col-name">{item.name}</td>
                <td>{item.games}</td>
                <td>{item.victory}</td>
                <td className="disable-media">{item.draw}</td>
                <td className="disable-media">{item.defeat}</td>
                <td className="disable-media">{item.proGoals}</td>
                <td className="disable-media">{item.ownGoals}</td>
                <td>{item.proGoals - item.ownGoals}</td>
                <td className="disable-media">
                  {(item.proGoals / item.games).toFixed(1)}
                </td>
                <td className="disable-media">
                  {(item.ownGoals / item.games).toFixed(1)}
                </td>
                <td>{}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
