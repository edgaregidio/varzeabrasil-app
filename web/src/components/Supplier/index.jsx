import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './styles.css'

export const list = [
  { id: 1, value: '/tables', name: 'Selecione' },
  { id: 2, value: 'arenasoccer', name: 'Power Ranking Arena Soccer' },
  { id: 3, value: 'copacepro', name: 'Copa Cepro' }
]

export default function Supplier() {
  const navitage = useNavigate()
  const [selectValue, setSelectValue] = useState('')

  function selectCamp() {
    if (selectValue) {
      navitage(`${selectValue}`)
    }
  }

  // console.log(selectValue)

  return (
    <div className="container-supplier">
      <select
        value={selectValue}
        onChange={e => setSelectValue(e.target.value)}
      >
        {list.map((item, index) => (
          <option value={item.value}>{item.name}</option>
        ))}
      </select>

      <button onClick={selectCamp}>Pesquisar</button>
    </div>
  )
}
