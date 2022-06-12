import React from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Header } from 'antd/es/layout/layout'
import { Avatar, Dropdown } from 'antd'
import ProfileMenu from './ProfileMenu'

function HeaderComponent(props) {
  const { toggleSidebar, collapsed } = props

  const setCollapsed = (collapsed) => {
    toggleSidebar(collapsed)
  }
  return (
    <Header className="header">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}
      <Dropdown overlay={<ProfileMenu />}>
        <a onClick={(e) => e.preventDefault()}>
          <Avatar size="large" icon={<UserOutlined />} />
        </a>
      </Dropdown>
    </Header>
  )
}

export default HeaderComponent
