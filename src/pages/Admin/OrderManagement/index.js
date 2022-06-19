import React, { useState } from 'react'
import { Col, Layout, Row } from 'antd'
import { HeaderComponent, Sidebar, TableManagement } from '../../../components'
import './style.less'
import { Content } from 'antd/es/layout/layout'
function OrderManagement(props) {
  // Initialization
  const [collapsed, setCollapsed] = useState(false)
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
  ]

  return (
    <Layout className="orderManagement">
      <Sidebar />
      <Layout>
        <HeaderComponent collapsed={collapsed} toggleSidebar={setCollapsed} />
        <Content>
          <TableManagement
            // rowSelection={{
            //   onChange: handleSelectChange,
            // }}
            columns={columns}
            // data={bicycleState}
            // onClickRow={handleOnClickRow}
          />
        </Content>
      </Layout>
    </Layout>
  )
}

export default OrderManagement
