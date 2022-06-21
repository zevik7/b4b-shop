import React from 'react'
import { Avatar, Menu } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

function ProfileMenu(props) {
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
