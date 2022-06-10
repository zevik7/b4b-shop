import { useState } from 'react'
import { Button, Layout, Menu } from 'antd'
import './style.less'
import { Logo } from '../../components'

const { Header } = Layout

const MenuItems = [
  {
    key: 'home',
    label: 'Home',
  },
  {
    key: 'shop',
    label: 'Shop',
  },
  {
    key: 'about',
    label: 'About Us',
  },
]

const HomeNavigation = () => {
  return (
    <Header
      className="home-navigation"
      style={{ position: 'fixed', zIndex: 1, width: '100%' }}
    >
      <Logo />
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={MenuItems}
      />
      <div className="auth-btn">
        <Button type="primary">Register</Button>
        <Button type="outlined">Login</Button>
      </div>
    </Header>
  )
}

export default HomeNavigation
