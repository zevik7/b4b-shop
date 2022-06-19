import React, { useState } from 'react'
import { Layout } from 'antd'
import { HeaderComponent, Sidebar } from '../../components'
import { Content } from 'antd/es/layout/layout'
import { Outlet } from 'react-router-dom'
import './style.less'
function Admin(props) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout className="adminPage">
      <Sidebar collapsed={collapsed} />
      <Layout>
        <HeaderComponent collapsed={collapsed} toggleSidebar={setCollapsed} />
        <Content className="content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Admin
