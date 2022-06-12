import React from 'react'
import { Menu } from 'antd'
import { DashboardOutlined, UnorderedListOutlined } from '@ant-design/icons'
import Sider from 'antd/es/layout/Sider'

function Sidebar(props) {
  const { collapsed } = props
  return (
    <Sider className="sidebar" trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">Logo here</div>
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
