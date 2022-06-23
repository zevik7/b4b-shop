import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Menu } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

function ProfileMenu() {
  const { t } = useTranslation()
  return (
    <Menu
      items={[
        {
          key: '1',
          icon: <Avatar size="default" icon={<UserOutlined />} />,
          label: 'Admin',
        },
        {
          key: '2',
          icon: <LogoutOutlined />,
          label: `${t('cta.logout')}`,
        },
      ]}
    />
  )
}

export default ProfileMenu
