import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Siderbar from './components/Siderbar'
import Main from './pages/Main'
import News from './pages/News'
import Tables from './pages/Tables'
import Gunners from './pages/Gunners'
import Profile from './pages/Profile'
import CopaCepro from './pages/Tables/CopaCepro'
import ArenaSoccer from './pages/Tables/ArenaSoccer'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Siderbar />}>
        <Route path="/" element={<Main />} />
        <Route path="news" element={<News />} />
        <Route path="tables" element={<Tables />} />
        <Route path="tables/copacepro" element={<CopaCepro />} />
        <Route path="tables/arenasoccer" element={<ArenaSoccer />} />
        {/* <Route path=":id" element={<Profile />} /> */}
        {/* </Route> */}
        <Route path="/gunners" element={<Gunners />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  )
}
