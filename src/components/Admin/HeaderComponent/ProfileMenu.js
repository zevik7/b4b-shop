import React from 'react'
import { Avatar, Menu } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'

function ProfileMenu(props) {
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
          label: 'Logout',
        },
      ]}
    />
  )
}

export default ProfileMenu
