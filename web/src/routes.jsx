import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Main from './pages/Main'
import News from './pages/News'
import Tables from './pages/Tables'
import Gunners from './pages/Gunners'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/news" element={<News />} />
      <Route path="/tables" element={<Tables />} />
      <Route path="/gunners" element={<Gunners />} />
    </Routes>
  )
}
