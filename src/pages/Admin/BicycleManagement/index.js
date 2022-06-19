import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Space, message, Layout } from 'antd'
import {
  AddBicycleModal,
  BicycleManageAction,
  EditBicycleModal,
  TableManagement,
} from '../../../components'
import { useDispatch, useSelector } from 'react-redux'
import {
  createBicycle,
  deleteBicycle,
  fetchBicycles,
  updateBicycle,
} from '../../../redux/bicycle/bicycleSlice'
import _ from 'lodash'
import { bicycleDataSelector } from '../../../redux/selectors'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

function BicycleManagement(props) {
  //Initialization
  const dispatch = useDispatch()
  const bicyclesData = useSelector(bicycleDataSelector)
  //State
  const [bicycleState, setBicycleState] = useState([])
  const [loading, setLoading] = useState(false)
  const [visibleAdd, setVisibleAdd] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [selectedKey, setSelectedKey] = useState([])
  const [editData, setEditData] = useState({})

  //columns data for table list bicycles
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      sorter: (a, b) => a.brand.length - b.brand.length,
    },
    {
      title: 'Price ($)',
      dataIndex: 'price',
      align: 'right',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      sorter: (a, b) => a.type.length - b.type.length,
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      render: (_, record) => (
        <Space>
          <Button
            type="default"
            shape="default"
            onClick={(e) => showEdit(record)}
            icon={<EditOutlined />}
          />
          <Button
            type="primary"
            shape="default"
            onClick={() => {
              handleDelete(record.id)
            }}
            icon={<DeleteOutlined />}
          />
        </Space>
      ),
    },
  ]

  //handle get bicycles
  useEffect(() => {
    setLoading(true)
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
      setLoading(false)
    }
  }, [bicyclesData])

  //func handle when Bicycle selected change
  const handleSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedKey(selectedRowKeys)
  }
  //func show edit
  const showEdit = (record) => {
    setVisibleEdit(true)
    setEditData(record)
    setSelectedKey(record.key)
  }
  //func handle delete selected
  const handleDelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm('Delete this bikes?')) {
      return false
    }
    if (typeof id === 'string') {
      dispatch(deleteBicycle(id))
    } else {
      selectedKey.forEach((key) => {
        dispatch(deleteBicycle(key))
      })
    }
    message.success('Delete successes!')
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
    message.success('Add bicycle successes!')
  }
  //func handle update
  const handleUpdate = (value) => {
    dispatch(updateBicycle({ id: selectedKey, data: value }))
    setVisibleEdit(false)
    message.success('Update successes!')
  }
  return (
    <>
      <Row className="bicycleManagement">
        <Col span={24}>
          <BicycleManageAction
            setVisible={setVisibleAdd}
            handleDelete={handleDelete}
          />
        </Col>
        <Col span={24}>
          <TableManagement
            rowSelection={{
              onChange: handleSelectChange,
            }}
            columns={columns}
            data={bicycleState}
            loading={loading}
          />
        </Col>
      </Row>
      <AddBicycleModal
        onCancel={() => setVisibleAdd(false)}
        onCreate={handleCreate}
        visible={visibleAdd}
      />
      {visibleEdit && (
        <EditBicycleModal
          onUpdate={handleUpdate}
          onCancel={() => setVisibleEdit(false)}
          visible={visibleEdit}
          editData={editData}
        />
      )}
    </>
  )
}

export default BicycleManagement
