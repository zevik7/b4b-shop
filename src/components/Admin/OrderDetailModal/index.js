import React from 'react'
import { Button, Col, Layout, Modal, Row } from 'antd'

function OrderDetailModal({ visible, setVisible, checkout }) {
  return (
    <Modal
      title="Order Detail"
      visible={visible}
      style={{ minWidth: '50%' }}
      footer={[
        <Button key="cancel" onClick="">
          Cancel Order
        </Button>,
        <Button key="accept" type="primary" onClick={() => {}}>
          Accept
        </Button>,
      ]}
      onCancel={() => setVisible(false)}
    >
      <Row gutter={8}>
        <Col span={24}>
          <h4>Customer Information</h4>
        </Col>
        <Col xs={24} sm={8} lg={4}>
          Name:
        </Col>
        <Col xs={24} sm={16} lg={8}>
          {checkout.customer}
        </Col>
        <Col xs={24} sm={8} lg={4}>
          Email:
        </Col>
        <Col xs={24} sm={16} lg={8}>
          {checkout.email}
        </Col>
        <Col xs={24} sm={8} lg={4}>
          Phone:
        </Col>
        <Col xs={24} sm={16} lg={8}>
          {checkout.phone}
        </Col>
        <Col xs={24} sm={8} lg={4}>
          Address:
        </Col>
        <Col xs={24} sm={16} lg={8}>
          {checkout.address}
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={24}>
          <h4>Bicycle Information</h4>
        </Col>
        <Col xs={24} sm={8} lg={4}>
          Name:
        </Col>
        <Col xs={24} sm={16} lg={8}>
          {checkout.bicycleName}
        </Col>
        <Col xs={24} sm={8} lg={4}>
          Price:
        </Col>
        <Col xs={24} sm={16} lg={8}>
          {checkout.price}
        </Col>
        <Col xs={24} sm={8} lg={4}>
          Color:
        </Col>
        <Col xs={24} sm={16} lg={8}>
          {checkout.color}
        </Col>
        <Col xs={24} sm={8} lg={4}>
          Frame:
        </Col>
        <Col xs={24} sm={16} lg={8}>
          {checkout.frame}
        </Col>
        <Col xs={24} sm={8} lg={4}>
          Size:
        </Col>
        <Col xs={24} sm={16} lg={8}>
          {checkout.size}
        </Col>
        <Col xs={24} sm={8} lg={4}>
          Quantity:
        </Col>
        <Col xs={24} sm={16} lg={8}>
          {checkout.quantity}
        </Col>
      </Row>
    </Modal>
  )
}

export default OrderDetailModal
