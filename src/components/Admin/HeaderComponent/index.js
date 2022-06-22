import React from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
import './index.less'
import { Header } from 'antd/es/layout/layout'
import { Avatar, Dropdown } from 'antd'
import ProfileMenu from './ProfileMenu'
import LanguageSelect from '../../LanguageSelect'

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
      <div className="header__right-control">
        <LanguageSelect />
        <Dropdown overlay={<ProfileMenu />}>
          <a onClick={(e) => e.preventDefault()}>
            <Avatar size="large" icon={<UserOutlined />} />
          </a>
        </Dropdown>
      </div>
    </Header>
  )
}

export default HeaderComponent
