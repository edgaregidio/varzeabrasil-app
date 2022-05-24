import React, { useEffect, useState } from 'react'
import api from '../../../api'
import Loading from '../../Loading'

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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    api.get('/arenasoccer').then(async data => {
      setLoading(true)
      setTable(await data.data)
      setLoading(false)
    })
  }, [])
  // console.log(loading)

  const order = table.sort((a, b) => {
    return b.victory - a.victory
  })

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
              {order.map((item, index) => (
                <tbody>
                  <tr>
                    <td>{index + 1}</td>
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
                </tbody>
              ))}
            </table>
          </div>
        </section>
      )}
    </>
  )
}
