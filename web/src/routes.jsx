import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Main from './pages/Main'
import News from './pages/News'
import Tables from './pages/Tables'
import Gunners from './pages/Gunners'
import Profile from './pages/Profile'
import CopaCepro from './pages/Tables/CopaCepro'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/news" element={<News />} />
      <Route path="tables" element={<Tables />}>
        <Route path="copacepro" element={<CopaCepro />} />
        <Route path=":id" element={<Profile />} />
      </Route>
      <Route path="/gunners" element={<Gunners />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}
