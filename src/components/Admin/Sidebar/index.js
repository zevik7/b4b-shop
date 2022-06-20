import React from 'react'
import { Menu } from 'antd'
import {
  CheckSquareOutlined,
  DashboardOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import Sider from 'antd/es/layout/Sider'
import { Logo, NavLink } from '../../../components'
import { useNavigate } from 'react-router-dom'

function Sidebar(props) {
  const { collapsed } = props
  const navigate = useNavigate()

  const url = {
    1: '',
    2: '/admin/bicycle',
    3: '/admin/order',
  }
  const handleClick = (e) => {
    navigate(url[e.key])
  }

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
      <Menu
        theme="light"
        mode="inline"
        onClick={handleClick}
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
          {
            key: '3',
            icon: <CheckSquareOutlined />,
            label: 'Order',
          },
        ]}
      />
    </Sider>
  )
}

export default Sidebar
