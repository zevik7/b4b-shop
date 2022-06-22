import { Button, Layout, Menu } from 'antd'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import englishIcon from '../../assets/icons/united-kingdom.png'
import vietnameIcon from '../../assets/icons/vietnam.png'
import { Logo, NavLink, Select } from '../../components'

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
