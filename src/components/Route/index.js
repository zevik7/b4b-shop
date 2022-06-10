import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../../pages/Home'
import Shop from '../../pages/Shop'
import BicycleDetail from '../../pages/BicycleDetail'
import BicycleManagement from '../../pages/Admin/BicycleManagement'
import Login from '../../pages/Admin/Login'
import Register from '../../pages/Admin/Register'
import NoMatch from '../../pages/NoMatch'

const RoutesApp = () => {
  return (
    <Routes>
      {/* For Users */}
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/bicycle-detail/:id" element={<BicycleDetail />} />

      {/* For Admins */}
      <Route path="/admin/bicycle-management" element={<BicycleManagement />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/register" element={<Register />} />

      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default RoutesApp
