import {
  CheckSquareOutlined,
  DashboardOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

import { Logo, NavLink } from '../../../components'

function Sidebar(props) {
  const { collapsed } = props
  const navigate = useNavigate()
  const { t } = useTranslation()

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
