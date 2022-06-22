import { MenuOutlined } from '@ant-design/icons'
import { Button, Layout, Menu, Space, Tabs } from 'antd'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

import englishIcon from '../../assets/icons/united-kingdom.png'
import vietnameIcon from '../../assets/icons/vietnam.png'
import { LanguageSelect, Logo, NavLink } from '../../components'
import './style.less'

const { Header } = Layout
const { TabPane } = Tabs

const menuItems = [
  {
    key: 'home',
    label: 'Home',
    to: '/',
  },
  {
    key: 'bicycles',
    label: 'Bicycles',
    to: '/shop',
  },
  {
    key: 'clothing',
    label: 'Clothing',
    to: '/clothing',
  },
  {
    key: 'helmet-and-shoes',
    label: 'Helmet & Shoes',
    to: '/helmet-and-shoes',
  },
  {
    key: 'components',
    label: 'Components',
    to: '/components',
  },
  {
    key: 'about',
    label: 'About Us',
    to: '/about',
  },
]

const HomeNavigation = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <Header
      className="home-navigation"
      style={{ position: 'fixed', zIndex: 10, width: '100%' }}
    >
      <Logo />
      <ul class="home-navigation__links">
        {menuItems.map((item) => (
          <li>
            <NavLink to={item.to}>{t(`home-navigation.${item.key}`)}</NavLink>
          </li>
        ))}
      </ul>
      <Space className="home-navigation__actions">
        <Button type="primary" onClick={() => navigate('/admin/bicycle')}>
          {t('cta.register')}
        </Button>
        <Button type="outlined" onClick={() => navigate('/admin/bicycle')}>
          {t('cta.login')}
        </Button>
        <LanguageSelect />
      </Space>
      {/* For mobile */}
      <MenuOutlined className="hamburger-icon" />
    </Header>
  )
}

export default HomeNavigation
