import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button, Layout, Menu } from 'antd'
import { Logo, NavLink, Select } from '../../components'

import vietnameIcon from '../../assets/icons/vietnam.png'
import englishIcon from '../../assets/icons/united-kingdom.png'

const { Header } = Layout

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

const LanguageSelect = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <Select
      defaultValue={'en'}
      options={languageOptions}
      onChange={changeLanguage}
    />
  )
}

export default LanguageSelect
