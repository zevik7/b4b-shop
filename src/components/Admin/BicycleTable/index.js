import React, { useState } from 'react'
import { Table, Button, Modal } from 'antd'

function Index(props) {
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
    },
  ]
  const data = [
    {
      createdAt: 1654763016,
      name: 'name 1',
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
  ]

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
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      <Modal
        title="Add new bicycle"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Add"
      >
        <form>
          <div class="form-group">
            <label for=""></label>
            <input
              type="text"
              name=""
              id=""
              class="form-control"
              placeholder=""
              aria-describedby="helpId"
            />
            <small id="helpId" class="text-muted">
              Help text
            </small>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default Index
