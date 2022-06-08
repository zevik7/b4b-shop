import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../../pages/Home'
import BicycleDetail from '../../pages/BicycleDetail'
import BicycleManagement from '../../pages/Admin/BicycleManagement'
import NoMatch from '../../pages/NoMatch'

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bicycle-detail/:id" element={<BicycleDetail />} />

      <Route path="admin/bicycle-management" element={<BicycleManagement />} />

      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default RoutesApp
