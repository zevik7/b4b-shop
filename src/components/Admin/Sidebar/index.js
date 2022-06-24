import {
  CheckSquareOutlined,
  DashboardOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '../../../components'

const { Sider } = Layout
function Sidebar(props) {
  const { collapsed } = props

  const getItem = (label, key, icon, children) => {
    return {
      key,
      icon,
      children,
      label,
    }
  }

  const Items = [
    getItem(<Link to="/admin/">Dashboard</Link>, 1, <DashboardOutlined />),
    getItem(
      <Link to="/admin/bicycle">Bicycle</Link>,
      2,
      <UnorderedListOutlined />
    ),
    getItem(<Link to="/admin/order">Order</Link>, 3, <CheckSquareOutlined />),
  ]

  return (
    <Sider
      className="sidebar"
      trigger={null}
      collapsedWidth="65"
      collapsed={collapsed}
    >
      <Logo
        style={
          collapsed && { paddingLeft: '0', paddingRight: '0', width: '160px' }
        }
      />
      <Menu theme="light" mode="inline" defaultSelectedKeys items={Items} />
    </Sider>
  )
}

export default Sidebar
