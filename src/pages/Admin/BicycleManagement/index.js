import { Layout } from 'antd'
import 'react-toastify/dist/ReactToastify.css'
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
  deleteBicycle,
  fetchBicycles,
  updateBicycle,
} from '../../../redux/bicycle/bicycleSlice'
import { bicycleDataSelector } from '../../../redux/selectors'
import _ from 'lodash'
import { toast, ToastContainer } from 'react-toastify'

const { Content } = Layout

const BicycleManagement = () => {
  //Initialization
  const dispatch = useDispatch()

  const bicyclesData = useSelector(bicycleDataSelector)

  const [bicycleState, setBicycleState] = useState([])
  const [collapsed, setCollapsed] = useState(false)
  const [visibleAdd, setVisibleAdd] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [selectedKey, setSelectedKey] = useState([])
  const [rowClicked, setRowClicked] = useState({})

  //handle get bicycles
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchBicycles())
    }, 500)
  }, [])

  useEffect(() => {
    if (!_.isEmpty(bicyclesData)) {
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
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: 'Material',
      dataIndex: 'material',
    },
  ]

  //func handle when Bicycle selected change
  const handleSelectChange = (selectedRowKeys, selectedRows) => {
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
    setRowClicked(record)
    setSelectedKey(record.id)
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
      variants: bikeData.variants ? bikeData.variants : [],
      images,
    }
    dispatch(createBicycle(bikeData))
    setVisibleAdd(false)
    toast.success('Create bicycle is successful!')
  }
  //func handle delete selected
  const handleDelete = () => {
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm('Delete this bikes?')
    ) {
      selectedKey.forEach((key) => {
        dispatch(deleteBicycle(key))
      })
      toast.success('Delete bicycle is successful!')
    }
  }

  const handleUpdate = (value) => {
    dispatch(updateBicycle({ id: selectedKey, data: value }))
    setVisibleEdit(false)
    toast.success('Update bicycle is successful!')
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
            data={bicycleState}
            onClickRow={handleOnClickRow}
          />
        </Content>
      </Layout>
      <AddBicycleModal
        onCancel={handleModalAddCancel}
        onCreate={handleCreate}
        visible={visibleAdd}
      />
      {visibleEdit && (
        <EditBicycleModal
          onUpdate={handleUpdate}
          onCancel={handleModalEditCancel}
          visible={visibleEdit}
          initialData={rowClicked}
        />
      )}
      <ToastContainer />
    </Layout>
  )
}

export default BicycleManagement
