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
        <section className="container-running-stilch scroll-table">
          <div>
            <table className="full_table_list">
              <thead>
                <th className="col-name no-moving-away">{name}</th>
                <th className="no-moving-away2">{games}</th>
                <th className="no-moving-away2">{victory}</th>
                <th className="no-moving-away2">{draw}</th>
                <th className="no-moving-away2">{defeat}</th>
                <th className="no-moving-away2">{proGoals}</th>
                <th className="no-moving-away2">{ownGoals}</th>
                <th className="no-moving-away2">{balance}</th>
                <th className="no-moving-away2">{proGoalsAverage}</th>
                <th className="no-moving-away2">{AgaintsGolsAverage}</th>
                <th className="no-moving-away2">{use}</th>
              </thead>
              <tbody>
                {order.map((item, index) => (
                  <tr>
                    {/* <td>{index + 1}</td> */}
                    <td className="col-name no-moving-away">
                      {index + 1}
                      &nbsp; &nbsp;
                      {item.name}
                    </td>
                    <td className="no-moving-away2">{item.games}</td>
                    <td className="no-moving-away2">{item.victory}</td>
                    <td className="no-moving-away2">{item.draw}</td>
                    <td className="no-moving-away2">{item.defeat}</td>
                    <td className="no-moving-away2">{item.proGoals}</td>
                    <td className="no-moving-away2">{item.ownGoals}</td>
                    <td className="no-moving-away2">
                      {item.proGoals - item.ownGoals}
                    </td>
                    <td className="no-moving-away2">
                      {(item.proGoals / item.games).toFixed(1)}
                    </td>
                    <td className="no-moving-away2">
                      {(item.ownGoals / item.games).toFixed(1)}
                    </td>
                    <td className="no-moving-away2">{}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </>
  )
}
