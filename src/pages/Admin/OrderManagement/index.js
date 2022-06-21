import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'antd'
import { TableManagement } from '../../../components'
import { InfoCircleOutlined } from '@ant-design/icons'
import OrderDetailModal from '../../../components/Admin/OrderDetailModal'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCheckouts } from '../../../redux/slices'
import { checkoutDataSelector } from '../../../redux/selectors'

function OrderManagement(props) {
  //Initialization
  const checkoutData = useSelector(checkoutDataSelector)
  const [selectedKey, setSelectedKey] = useState([])
  const [showDetail, setShowDetail] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCheckouts())
  }, [])
  useEffect(() => {}, [checkoutData])

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
          onClick={(e) => handleShowDetail(record)}
          icon={<InfoCircleOutlined />}
        />
      ),
    },
  ]

  //func handle showDetail
  const handleShowDetail = (record) => {
    setShowDetail(true)
  }

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
      <OrderDetailModal visible={showDetail} setVisible={setShowDetail} />
    </>
  )
}

export default OrderManagement
