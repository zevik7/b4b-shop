import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import './style.less'
import { BicycleTable, HeaderComponent, Sidebar } from '../../../components'

const { Header, Sider, Content } = Layout

const BicycleManagement = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout>
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout">
        <HeaderComponent collapsed={collapsed} toggleSidebar={setCollapsed} />
        <Content className="site-layout-background">
          <BicycleTable />
        </Content>
      </Layout>
    </Layout>
  )
}

export default BicycleManagement
