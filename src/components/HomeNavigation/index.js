import { useState } from 'react'
import { Button, Layout, Menu } from 'antd'
import './style.less'
import { Logo, NavLink } from '../../components'
import { useNavigate } from 'react-router-dom'

const { Header } = Layout

const menuItems = [
  {
    key: 'home',
    label: 'Home',
    to: '/',
  },
  {
    key: 'shop',
    label: 'Shop',
    to: '/shop',
  },
  {
    key: 'about',
    label: 'About Us',
    to: '/about',
  },
]

const HomeNavigation = () => {
  const navigate = useNavigate()

  return (
    <Header
      className="home-navigation"
      style={{ position: 'fixed', zIndex: 1, width: '100%' }}
    >
      <Logo />
      <div className="menu">
        {menuItems.map((item) => (
          <NavLink key={item.key} to={item.to}>
            {item.label}
          </NavLink>
        ))}
      </div>
      <div className="auth-btn">
        <Button type="primary" onClick={() => navigate('/admin/register')}>
          Register
        </Button>
        <Button type="outlined" onClick={() => navigate('/admin/login')}>
          Login
        </Button>
      </div>
    </Header>
  )
}

export default HomeNavigation
