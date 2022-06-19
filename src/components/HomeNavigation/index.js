import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button, Layout, Menu } from 'antd'
import './style.less'
import { Logo, NavLink, Select } from '../../components'

import vietnameIcon from '../../assets/icons/vietnam.png'
import englishIcon from '../../assets/icons/united-kingdom.png'

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

const languageOptions = [
  {
    key: 'vi',
    value: 'Vietnamese',
    icon: vietnameIcon,
  },
  {
    key: 'en',
    value: 'English',
    icon: englishIcon,
  },
]

const HomeNavigation = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <Header
      className="home-navigation"
      style={{ position: 'fixed', zIndex: 10, width: '100%' }}
    >
      <Logo />
      <div className="menu">
        {menuItems.map((item) => (
          <NavLink key={item.key} to={item.to}>
            {item.label}
          </NavLink>
        ))}
      </div>
      <Button type="primary" onClick={() => navigate('/admin/bicycle')}>
        {t('cta.register')}
      </Button>
      <Button type="outlined" onClick={() => navigate('/admin/bicycle')}>
        {t('cta.login')}
      </Button>
      <Select
        defaultValue={'en'}
        options={languageOptions}
        onChange={changeLanguage}
      />
    </Header>
  )
}

export default HomeNavigation
