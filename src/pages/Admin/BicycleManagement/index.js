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
import { Bicycle, HeaderComponent, Sidebar } from '../../../components'

const { Header, Sider, Content } = Layout

const BicycleManagement = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout className="bicycleManagement">
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout">
        <HeaderComponent collapsed={collapsed} toggleSidebar={setCollapsed} />
        <Content className="content">
          <Bicycle />
        </Content>
      </Layout>
    </Layout>
  )
}

export default BicycleManagement
