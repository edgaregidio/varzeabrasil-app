import React from 'react'

import './styles.css'

export default function CardTable({
  teamA,
  teamB,
  nameA,
  nameB,
  date,
  time,
  resultA,
  resultB
}) {
  return (
    <div className="card-table">
      <h3>
        <strong>{date}</strong> Arena Muranga <strong>{time}</strong>
      </h3>
      <div className="teams">
        <div className="team-col">
          <h1>{nameA}</h1>
          <img src={teamA} alt="" />
        </div>
        <div className="results">
          <h2>{resultA}</h2>
          <h1>x</h1>
          <h2>{resultB}</h2>
        </div>
        <div className="team-col">
          <img src={teamB} alt="" />
          <h1>{nameB}</h1>
        </div>
      </div>
      <h4>quartas 1</h4>
    </div>
  )
}
