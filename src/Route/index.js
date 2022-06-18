import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Checkout from '../pages/Checkout'
import BicycleDetail from '../pages/BicycleDetail'
import BicycleManagement from '../pages/Admin/BicycleManagement'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NoMatch from '../pages/NoMatch'
import OrderManagement from '../pages/Admin/OrderManagement'
import Admin from '../pages/Admin'

const RoutesApp = () => {
  return (
    <Routes>
      {/* For Users */}
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/shop/bicycle-detail/:id" element={<BicycleDetail />} />

      {/* For Admins */}
      <Route path="/admin/" element={<Admin />}>
        <Route path="bicycle" element={<BicycleManagement />} />
        <Route path="order" element={<OrderManagement />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default RoutesApp
