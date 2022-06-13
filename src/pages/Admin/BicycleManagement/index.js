import { Layout } from 'antd'
import React, { useState } from 'react'
import './style.less'
import {
  AddBicycleModal,
  BicycleManageAction,
  HeaderComponent,
  Sidebar,
  TableManagement,
} from '../../../components'

const { Content } = Layout

const BicycleManagement = () => {
  //Initialization
  const [collapsed, setCollapsed] = useState(false)
  const [visible, setVisible] = useState(false)
  const [selectedKey, setSelectedKey] = useState([])

  //columns data for table list bicycles
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Color',
      dataIndex: 'color',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
    },
  ]
  //data list bicycles
  const data = [
    {
      createdAt: 1654763016,
      name: 'abc',
      description: 'description 1',
      price: 86,
      color: 'color 1',
      image: [],
      type: 'type 1',
      rating: 1,
      key: '1',
    },
    {
      createdAt: 1654762956,
      name: 'name 2',
      description: 'description 2',
      price: 99,
      color: 'color 2',
      image: [],
      type: 'type 2',
      rating: 5,
      key: '2',
    },
    {
      createdAt: 1654762956,
      name: 'name1',
      description: 'description 2',
      price: 99,
      color: 'color 2',
      image: [],
      type: 'type 2',
      rating: 5,
      key: '3',
    },
    {
      createdAt: 1654762956,
      name: 'name 2',
      description: 'description 2',
      price: 99,
      color: 'color 2',
      image: [],
      type: 'type 2',
      rating: 5,
      key: '4',
    },
    {
      createdAt: 1654762956,
      name: 'name 2',
      description: 'description 2',
      price: 99,
      color: 'color 2',
      image: [],
      type: 'type 2',
      rating: 5,
      key: '5',
    },
    {
      createdAt: 1654762956,
      name: 'name 2',
      description: 'description 2',
      price: 99,
      color: 'color 2',
      image: [],
      type: 'type 2',
      rating: 5,
      key: '6',
    },
  ]

  //func handle when bicycle selected change
  const handleSelectChange = (selectedRowKeys, selectedRows) => {
    console.log(selectedRowKeys)
    console.log(selectedRows)
    setSelectedKey(selectedRowKeys)
  }

  //func handle when modal is canceled
  const handleModalCancel = () => {
    setVisible(false)
  }

  //func handle when modal add summit
  const handleCreate = (value) => {
    console.log(value)
  }
  //func handle delete selected
  const handleDelete = () => {
    console.log('Delete ', selectedKey)
  }

  return (
    <Layout className="bicycleManagement">
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout">
        <HeaderComponent collapsed={collapsed} toggleSidebar={setCollapsed} />
        <Content className="content">
          <BicycleManageAction
            setVisible={setVisible}
            handleDelete={handleDelete}
          />
          <TableManagement
            rowSelection={{
              onChange: handleSelectChange,
            }}
            columns={columns}
            data={data}
          />
        </Content>
      </Layout>
      <AddBicycleModal
        onCancel={handleModalCancel}
        onCreate={handleCreate}
        visible={visible}
      />
    </Layout>
  )
}

export default BicycleManagement
