import React from 'react'
import { Menu } from 'antd'
import { DashboardOutlined, UnorderedListOutlined } from '@ant-design/icons'
import Sider from 'antd/es/layout/Sider'
import { Logo, NavLink } from '../../../components'

function Sidebar(props) {
  const { collapsed } = props
  return (
    <Sider className="sidebar" trigger={null} collapsible collapsed={collapsed}>
      <Logo />
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['2']}
        items={[
          {
            key: '1',
            icon: <DashboardOutlined />,
            label: 'Dashboard',
          },
          {
            key: '2',
            icon: <UnorderedListOutlined />,
            label: 'Bicycle',
          },
        ]}
      />
    </Sider>
  )
}

export default Sidebar
