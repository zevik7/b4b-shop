import React, { useEffect, useState } from 'react'
import { Button, Col, message, Row } from 'antd'
import { TableManagement } from '../../../components'
import OrderDetailModal from '../../../components/Admin/OrderDetailModal'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCheckouts, updateCheckout } from '../../../redux/slices'
import { checkoutDataSelector } from '../../../redux/selectors'
import { useTranslation } from 'react-i18next'

import _ from 'lodash'

function OrderManagement(props) {
  //Initialization
  const { t } = useTranslation()
  const checkoutData = useSelector(checkoutDataSelector)
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
      const checkouts = checkoutData.map((checkout, index) => ({
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
      }))
      setCheckouts(checkouts)
      setLoading(false)
    }
  }, [checkoutData])

  //columns data for table list bicycles
  const columns = [
    {
      title: `${t('admin_page.order_table.bicycle')}`,
      dataIndex: 'bicycleName',
      sorter: (a, b) => a.bicycleName.length - b.bicycleName.length,
    },
    {
      title: `${t('admin_page.order_table.quantity')}`,
      dataIndex: 'quantity',
      sorter: (a, b) => a.quantity.length - b.quantity.length,
    },
    {
      title: `${t('admin_page.order_table.customer')}`,
      dataIndex: 'customer',
      sorter: (a, b) => a.customer.length - b.customer.length,
    },
    {
      title: `${t('admin_page.order_table.phone_number')}`,
      dataIndex: 'phone',
      sorter: (a, b) => a.phone.length - b.phone.length,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: `${t('admin_page.order_table.action.title')}`,
      key: 'action',
      align: 'center',
      fixed: 'right',
      render: (_, record) => (
        <Button
          type="default"
          shape="default"
          onClick={(e) => handleShowDetail(record)}
        >
          View
        </Button>
      ),
    },
  ]

  //func handle showDetail
  const handleShowDetail = (record) => {
    setShowDetail(true)
    setCheckoutDetail(record)
  }

  const handleCancelOrder = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm('Cancel this order?')) {
      return false
    }
    dispatch(updateCheckout({ id, data: { status: 'Canceled' } }))
    message.success('Order is canceled!')
    setShowDetail(false)
  }

  const handleAcceptOrder = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm('Accept this order?')) {
      return false
    }
    dispatch(updateCheckout({ id, data: { status: 'Accepted' } }))
    message.success('Accept order success!')
    setShowDetail(false)
  }

  return (
    <>
      <Row className="orderManagementPage">
        <Col span={24}>
          <TableManagement
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
        acceptOrder={handleAcceptOrder}
        cancelOrder={handleCancelOrder}
      />
    </>
  )
}

export default OrderManagement
