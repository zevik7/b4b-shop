import React, { useState } from 'react'
import { Button, Col, Row, Space } from 'antd'
import { BicycleManageAction, TableManagement } from '../../../components'
import {
  DeleteOutlined,
  EditOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'

function OrderManagement(props) {
  //Initialization
  const [selectedKey, setSelectedKey] = useState([])

  //columns data for table list bicycles
  const columns = [
    {
      title: 'Bicycle',
      dataIndex: 'bicycleName',
      sorter: (a, b) => a.bicycleName.length - b.bicycleName.length,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      sorter: (a, b) => a.quantity.length - b.quantity.length,
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      sorter: (a, b) => a.customer.length - b.customer.length,
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      sorter: (a, b) => a.phone.length - b.phone.length,
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
            // onClick={(e) => showEdit(record)}
            icon={<InfoCircleOutlined />}
          />
          <Button
            type="primary"
            shape="default"
            onClick={() => {
              // handleDelete(record.id)
            }}
            icon={<DeleteOutlined />}
          />
        </Space>
      ),
    },
  ]

  //func handle when Bicycle selected change
  const handleSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedKey(selectedRowKeys)
  }

  return (
    <>
      <Row className="bicycleManagement">
        <Col span={24}>
          <TableManagement
            rowSelection={{
              onChange: handleSelectChange,
            }}
            columns={columns}
            // data={bicycleState}
            loading={true}
          />
        </Col>
      </Row>
    </>
  )
}

export default OrderManagement
