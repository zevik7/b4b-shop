import React, { useEffect } from 'react'
import { Menu } from 'antd'
import {
  CheckSquareOutlined,
  DashboardOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import Sider from 'antd/es/layout/Sider'
import { Logo, NavLink } from '../../../components'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

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
      <Menu theme="light" mode="inline" items={Items} />
    </Sider>
  )
}

export default Sidebar
