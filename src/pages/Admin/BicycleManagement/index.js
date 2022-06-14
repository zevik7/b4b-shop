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
import {
  createBicycle,
  fetchBicycles,
} from '../../../redux/bicycle/bicycleSlice'
import { bicyclesSelector } from '../../../redux/selectors'
import _ from 'lodash'

const { Content } = Layout

const BicycleManagement = () => {
  //Initialization
  const dispatch = useDispatch()

  const bicyclesData = useSelector(bicyclesSelector)

  const [bicycleState, setBicycleState] = useState([])
  const [collapsed, setCollapsed] = useState(false)
  const [visibleAdd, setVisibleAdd] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [selectedKey, setSelectedKey] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  //handle get bicycles
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      dispatch(fetchBicycles())
    }, 500)
  }, [])

  useEffect(() => {
    if (!_.isEmpty(bicyclesData)) {
      setIsLoading(false)
      let newState = []
      bicyclesData.forEach((bikeData) => {
        bikeData = {
          ...bikeData,
          key: bikeData.id,
        }
        newState.push(bikeData)
      })
      setBicycleState(newState)
    }
  }, [bicyclesData])

  //columns data for table list bicycles
  const columns = [
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
    },
    {
      title: 'Type',
      dataIndex: 'type',
    },
    {
      title: 'Color',
      dataIndex: 'color',
    },
  ]

  //func handle when Bicycle selected change
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
  const handleCreate = (bikeData) => {
    let images = []
    bikeData.images.fileList.forEach((img) => {
      images.push(img.name)
    })
    bikeData = {
      ...bikeData,
      images,
    }
    dispatch(createBicycle(bikeData))
  }
  //func handle delete selected
  const handleDelete = () => {
    console.log('Delete ', selectedKey)
  }

  const handleUpdate = (value) => {
    console.log(value)
    setVisibleEdit(false)
  }

  // console.log("render")
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
            data={bicycleState}
            loading={isLoading}
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
