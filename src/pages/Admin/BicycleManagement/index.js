import { Layout } from 'antd'
import React, { useEffect, useState } from 'react'
import './style.less'
import {
  AddBicycleModal,
  BicycleManageAction,
  EditBicycleModal,
  HeaderComponent,
  Sidebar,
  TableManagement,
} from '../../../components'
import { useDispatch, useSelector } from 'react-redux'
// import {getBicycles} from "./bicycleManagementSlice";

const { Content } = Layout

const BicycleManagement = () => {
  //Initialization
  const dispatch = useDispatch()

  // const bicyclesState = useSelector((state) => state.bicycles)
  const [collapsed, setCollapsed] = useState(false)
  const [visibleAdd, setVisibleAdd] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [selectedKey, setSelectedKey] = useState([])

  //handle get bicycles
  // useEffect(() => {
  //   dispatch(getBicycles())
  // }, [])

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
  const handleModalAddCancel = () => {
    setVisibleAdd(false)
  }
  const handleModalEditCancel = () => {
    setVisibleEdit(false)
  }

  const handleOnClickRow = (record) => {
    console.log(record)
    setVisibleEdit(true)
  }

  //func handle when modal add summit
  const handleCreate = (value) => {
    console.log(value)
  }
  //func handle delete selected
  const handleDelete = () => {
    console.log('Delete ', selectedKey)
  }

  const handleUpdate = (value) => {
    console.log(value)
    setVisibleEdit(false)
  }

  return (
    <Layout className="bicycleManagement">
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout">
        <HeaderComponent collapsed={collapsed} toggleSidebar={setCollapsed} />
        <Content className="content">
          <BicycleManageAction
            setVisible={setVisibleAdd}
            handleDelete={handleDelete}
          />
          <TableManagement
            rowSelection={{
              onChange: handleSelectChange,
            }}
            columns={columns}
            data={data}
            onClickRow={handleOnClickRow}
          />
        </Content>
      </Layout>
      <AddBicycleModal
        onCancel={handleModalAddCancel}
        onCreate={handleCreate}
        visible={visibleAdd}
      />
      <EditBicycleModal
        onUpdate={handleUpdate}
        onCancel={handleModalEditCancel}
        visible={visibleEdit}
      />
    </Layout>
  )
}

export default BicycleManagement
