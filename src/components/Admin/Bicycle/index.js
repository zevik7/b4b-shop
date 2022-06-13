import React, { useState } from 'react'
import { Button } from 'antd'
import BicycleList from './BicycleList'
import AddBicycle from './AddBicycle'

function Bicycle(props) {
  const [selectedKey, setSelectedKey] = useState([])
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [modalText, setModalText] = useState('Content of the modal')

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

  const onCreate = (values) => {
    console.log('Received values of form: ', values)
    // setVisible(false);
  }

  const handleDelete = () => {
    console.log('Delete: ' + selectedKey)
  }

  const handleOk = () => {}

  const handleCancel = () => {
    setVisible(false)
  }

  const handleSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedKey(selectedRowKeys)
  }

  const rowSelection = {
    onChange: handleSelectChange,
  }

  return (
    <div>
      <div className="action">
        <Button type="default" onClick={(e) => setVisible(true)}>
          Add
        </Button>
        <Button type="primary" onClick={handleDelete}>
          Delete
        </Button>
      </div>
      <BicycleList rowSelection={rowSelection} columns={columns} data={data} />
      <AddBicycle
        visible={visible}
        onCancel={handleCancel}
        onCreate={onCreate}
      />
    </div>
  )
}

export default Bicycle
