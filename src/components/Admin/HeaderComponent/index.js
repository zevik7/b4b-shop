import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Avatar, Dropdown } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'

import LanguageSelect from '../../LanguageSelect'
import ProfileMenu from './ProfileMenu'
import './index.less'

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
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  )
}

export default HeaderComponent
