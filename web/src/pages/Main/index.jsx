import React from 'react'
import './styles.css'

export default function Main() {
  return (
    <div>
      <section className="news" key={data.id}>
        <div className="col">{data.description}</div>
        <div className="col">
          <div className="cards">img 2</div>
          <div className="cards">img 3</div>
        </div>
      </section>
      <section className="tables">
        <div className="table-camp">Tables</div>
        <div className="table-gunners">gunners</div>
      </section>
    </div>
  )
}
