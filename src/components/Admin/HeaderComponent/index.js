import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Header } from 'antd/es/layout/layout'

function HeaderComponent(props) {
  const { toggleSidebar, collapsed } = props

  const setCollapsed = (collapsed) => {
    toggleSidebar(collapsed)
  }
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
      }}
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}
    </Header>
  )
}

export default HeaderComponent
