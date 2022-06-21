import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button, Layout, Space } from 'antd'
import './style.less'
import { Logo, NavLink, LanguageSelect } from '../../components'

const { Header } = Layout

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
    <Header className="home-navigation">
      <Logo
        style={{
          marginRight: '20px',
        }}
      />
      <ul className={'home-navigation__menu ' + (isMoble ? 'open' : '')}>
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
        className={'hamburger ' + (isMoble ? 'toggle' : '')}
        onClick={handleHamburger}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </Header>
  )
}

export default HomeNavigation
