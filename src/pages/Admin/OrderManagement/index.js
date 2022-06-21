import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'antd'
import { TableManagement } from '../../../components'
import { InfoCircleOutlined } from '@ant-design/icons'
import OrderDetailModal from '../../../components/Admin/OrderDetailModal'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCheckouts } from '../../../redux/slices'
import { checkoutDataSelector } from '../../../redux/selectors'
import _ from 'lodash'

function OrderManagement(props) {
  //Initialization
  const checkoutData = useSelector(checkoutDataSelector)
  const [selectedKey, setSelectedKey] = useState([])
  const [showDetail, setShowDetail] = useState(false)
  const [checkouts, setCheckouts] = useState([])
  const [checkoutDetail, setCheckoutDetail] = useState({})
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      dispatch(fetchCheckouts())
    }, 500)
  }, [])
  useEffect(() => {
    if (!_.isEmpty(checkoutData)) {
      const checkouts = []
      checkoutData.forEach((checkout) => {
        let newCheckout = {
          customer: checkout.user.name,
          email: checkout.user.email,
          phone: checkout.user.phone,
          address: checkout.user.address,
          bicycleName: checkout.bicycle.name,
          price: checkout.bicycle.price,
          color: checkout.bicycle.variant.color,
          frame: checkout.bicycle.variant.frame,
          size: checkout.bicycle.variant.size,
          quantity: checkout.bicycle.variant.quantity,
          status: checkout.status,
          key: checkout.id,
          note: checkout.note,
        }
        checkouts.push(newCheckout)
      })
      setCheckouts(checkouts)
      setLoading(false)
    }
  }, [checkoutData])

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
    setCheckoutDetail(record)
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
            data={checkouts}
            loading={loading}
          />
        </Col>
      </Row>
      <OrderDetailModal
        checkout={checkoutDetail}
        visible={showDetail}
        setVisible={setShowDetail}
      />
    </>
  )
}

export default OrderManagement
