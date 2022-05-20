import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './styles.css'

export default function Supplier() {
  const navitage = useNavigate()
  const [selectValue, setSelectValue] = useState(1)
  const list = [
    { id: 1, value: 'select', name: 'Selecione', selected: 'selected' },
    { id: 2, value: 'copacepro', name: 'Copa Cepro' }
  ]

  function selectCamp() {
    if (selectValue === 'copacepro') {
      navitage('copacepro')
    }
  }

  return (
    <div className="container-supplier">
      <select
        value={selectValue}
        onChange={e => setSelectValue(e.target.value)}
      >
        {list.map((item, index) => (
          <option value={item.value} selected={item.selected}>
            {item.name}
          </option>
        ))}
      </select>

      <button onClick={selectCamp}>Pesquisar</button>
    </div>
  )
}
