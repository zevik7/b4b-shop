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

  const data = [
    {
      customer: 'Phú Nguyên',
      email: 'nguyen@gmail.vom',
      phone: '0987654321',
      address: 'viet nam',
      bicycleName: 'Fuji Altamira 2.2 Shimano 105 - 2013 demo  Playtri -Tyler',
      price: 1799,
      color: 'Carbon',
      frame: '55cm',
      size: 'Medium',
      quantity: 1,
      status: 'status 2',
      key: '2',
    },
  ]
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
      title: 'Status',
      dataIndex: 'status',
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      render: (_, record) => (
        <Button
          type="primary"
          shape="default"
          // onClick={(e) => showEdit(record)}
          icon={<InfoCircleOutlined />}
        />
      ),
    },
  ]

  //func handle when Bicycle selected change
  const handleSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedKey(selectedRowKeys)
  }

  return (
    <>
      <Row className="orderManagementPage">
        <Col span={24}>
          <TableManagement
            rowSelection={{
              onChange: handleSelectChange,
            }}
            columns={columns}
            data={data}
            // loading={true}
          />
        </Col>
      </Row>
    </>
  )
}

export default OrderManagement
