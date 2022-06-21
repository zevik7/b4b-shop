import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button, Layout, Space, Menu, Tabs } from 'antd'
import './style.less'
import { Logo, NavLink, LanguageSelect } from '../../components'
import { MenuOutlined } from '@ant-design/icons'

import vietnameIcon from '../../assets/icons/vietnam.png'
import englishIcon from '../../assets/icons/united-kingdom.png'

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
]

const HomeNavigation = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isMoble, setIsMobile] = useState(false)

  const handleHamburger = () => {
    setIsMobile(!isMoble)
  }

  return (
    <Header
      className="home-navigation"
      style={{ position: 'fixed', zIndex: 10, width: '100%' }}
    >
      <Logo />
      <ul class={'home-navigation__menu ' + (isMoble ? 'open' : '')}>
        {menuItems.map((item) => (
          <li className={isMoble ? 'fade' : ''}>
            <NavLink to={item.to}>{item.label}</NavLink>
          </li>
        ))}
        <li className={'actions ' + (isMoble ? 'fade' : '')}>
          <Space>
            <Button type="primary" onClick={() => navigate('/admin/bicycle')}>
              {t('cta.register')}
            </Button>
            <Button type="outlined" onClick={() => navigate('/admin/bicycle')}>
              {t('cta.login')}
            </Button>
            <LanguageSelect />
          </Space>
        </li>
      </ul>
      {/* For mobile */}
      <div
        class={'hamburger ' + (isMoble ? 'toggle' : '')}
        onClick={handleHamburger}
      >
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </Header>
  )
}

export default HomeNavigation
