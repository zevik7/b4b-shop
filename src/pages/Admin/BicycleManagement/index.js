import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import {
  AddBicycleModal,
  BicycleManageAction,
  TableManagement,
} from '../../../components'
import { useDispatch, useSelector } from 'react-redux'
import {
  createBicycle,
  fetchBicycles,
  deleteBicycle,
} from '../../../redux/slices'
import { bicycleDataSelector } from '../../../redux/selectors'
import { toast } from 'react-toastify'
import _ from 'lodash'

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
  const [rowClicked, setRowClicked] = useState({})

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
      title: 'Price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      sorter: (a, b) => a.type.length - b.type.length,
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
  // handle row onClick
  const handleOnClickRow = (record) => {
    setRowClicked(record)
    setSelectedKey(record.id)
    setVisibleEdit(true)
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

  //func handle when modal is canceled
  const handleModalAddCancel = () => {
    setVisibleAdd(false)
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
  }

  return (
    <Row>
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
          onClickRow={handleOnClickRow}
          loading={loading}
        />
      </Col>
      <AddBicycleModal
        onCancel={handleModalAddCancel}
        onCreate={handleCreate}
        visible={visibleAdd}
      />
    </Row>
  )
}

export default BicycleManagement
