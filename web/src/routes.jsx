import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Main from './pages/Main'
import News from './pages/News'
import Tables from './pages/Tables'
import Gunners from './pages/Gunners'
import Profile from './pages/Profile'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/news" element={<News />} />
      <Route path="tables" element={<Tables />}>
        <Route path="c" element={<h1>testando de novo</h1>} />
        <Route path=":id" element={<Profile />} />
      </Route>
      <Route path="/gunners" element={<Gunners />} />
    </Routes>
  )
}
