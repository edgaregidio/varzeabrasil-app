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
                <th className="">{games}</th>
                <th className="">{victory}</th>
                <th className="">{draw}</th>
                <th className=" ">{defeat}</th>
                <th className=" ">{proGoals}</th>
                <th className=" ">{ownGoals}</th>
                <th>{balance}</th>
                <th className=" ">{proGoalsAverage}</th>
                <th className=" ">{AgaintsGolsAverage}</th>
                <th>{use}</th>
              </thead>
              <tbody className="bosta">
                {order.map((item, index) => (
                  <tr>
                    {/* <td>{index + 1}</td> */}
                    <td className="col-name no-moving-away2">
                      {index + 1}
                      &nbsp; &nbsp;
                      {item.name}
                    </td>
                    <td className="">{item.games}</td>
                    <td>{item.victory}</td>
                    <td className="">{item.draw}</td>
                    <td className="">{item.defeat}</td>
                    <td className="">{item.proGoals}</td>
                    <td className="">{item.ownGoals}</td>
                    <td>{item.proGoals - item.ownGoals}</td>
                    <td className="">
                      {(item.proGoals / item.games).toFixed(1)}
                    </td>
                    <td className="">
                      {(item.ownGoals / item.games).toFixed(1)}
                    </td>
                    <td>{}%</td>
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
