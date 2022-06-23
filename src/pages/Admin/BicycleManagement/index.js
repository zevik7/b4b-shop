import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Col, Row, Space, message } from 'antd'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import {
  AddBicycleModal,
  BicycleManageAction,
  EditBicycleModal,
  TableManagement,
} from '../../../components'
import { bicycleDataSelector } from '../../../redux/selectors'
import {
  createBicycle,
  deleteBicycle,
  fetchBicycles,
  updateBicycle,
} from '../../../redux/slices'

function BicycleManagement() {
  const dispatch = useDispatch()
  const bicyclesData = useSelector(bicycleDataSelector)
  const { t } = useTranslation()
  const [bicycleState, setBicycleState] = useState([])
  const [loading, setLoading] = useState(false)
  const [visibleAdd, setVisibleAdd] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [selectedKey, setSelectedKey] = useState([])
  const [editData, setEditData] = useState({})

  const columns = [
    {
      title: `${t('admin_page.table.name')}`,
      dataIndex: 'name',
      width: 250,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: `${t('admin_page.table.brand')}`,
      dataIndex: 'brand',
      width: 125,
      sorter: (a, b) => a.brand.length - b.brand.length,
    },
    {
      title: `${t('admin_page.table.price')}`,
      dataIndex: 'price',
      align: 'right',
      width: 125,

      sorter: (a, b) => a.price - b.price,
    },
    {
      title: `${t('admin_page.table.type')}`,
      dataIndex: 'type',
      width: 150,
      sorter: (a, b) => a.type.length - b.type.length,
    },
    {
      title: `${t('admin_page.table.action.title')}`,
      key: 'action',
      align: 'center',
      fixed: 'right',
      width: 100,
      render: (_, record) => (
        <Space>
          <Button
            type="default"
            shape="default"
            onClick={() => showEdit(record)}
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

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      dispatch(fetchBicycles())
    }, 500)
  }, [bicyclesData, dispatch])

  useEffect(() => {
    if (!_.isEmpty(bicyclesData)) {
      let newState = []
      bicyclesData.map((bikeData) => ({
        ...bikeData,
        key: bikeData.id,
      }))
      setBicycleState(newState)
      setLoading(false)
    }
  }, [bicyclesData, dispatch])

  const handleSelectChange = (selectedRowKeys) => {
    setSelectedKey(selectedRowKeys)
  }

  const showEdit = (record) => {
    setVisibleEdit(true)
    setEditData(record)
    setSelectedKey(record.key)
  }

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
            setVisibleAdd={setVisibleAdd}
            handleDelete={handleDelete}
            disabledActions={_.isEmpty(selectedKey)}
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
