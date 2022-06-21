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
import { useTranslation } from 'react-i18next'

function Sidebar(props) {
  const { collapsed } = props
  const navigate = useNavigate()
  const { t } = useTranslation()

  const url = {
    1: '',
    2: '/admin/bicycle',
    3: '/admin/order',
  }
  const handleClick = (e) => {
    navigate(url[e.key])
  }

  return (
    <Sider className="sidebar" trigger={null} collapsible collapsed={collapsed}>
      <Logo />
      <Menu
        theme="light"
        mode="inline"
        onClick={handleClick}
        items={[
          {
            key: '1',
            icon: <DashboardOutlined />,
            label: `${t('admin_page.side_bar.dashboard')}`,
          },
          {
            key: '2',
            icon: <UnorderedListOutlined />,
            label: `${t('admin_page.side_bar.bicycle')}`,
          },
          {
            key: '3',
            icon: <CheckSquareOutlined />,
            label: `${t('admin_page.side_bar.order')}`,
          },
        ]}
      />
    </Sider>
  )
}

export default Sidebar
