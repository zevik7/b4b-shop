import React, { useEffect } from 'react'
import { Menu } from 'antd'
import {
  CheckSquareOutlined,
  DashboardOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import Sider from 'antd/es/layout/Sider'
import { Logo } from '../../../components'
import { Link, useNavigate } from 'react-router-dom'

function Sidebar(props) {
  const { collapsed } = props
  const navigate = useNavigate()

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
    <Sider className="sidebar" trigger={null} collapsible collapsed={collapsed}>
      <Logo />
      <Menu theme="light" mode="inline" defaultSelectedKeys items={Items} />
    </Sider>
  )
}

export default Sidebar
