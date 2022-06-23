import { Col, List, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './index.less'

const { Title, Text } = Typography

const CheckoutInfo = () => {
  const navigate = useNavigate()
  const [checkout, setCheckout] = useState({})

  useEffect(() => {
    if (!localStorage.getItem('bicycleInfos')) {
      navigate('/*')
    }
    setCheckout(JSON.parse(localStorage.getItem('bicycleInfos')))
  }, [navigate])

  if (Object.keys(checkout).length === 0) return

  return (
    <div className="info-ctn">
      <div className="info-header">
        <Title level={5}>Info Details</Title>
      </div>
      <List>
        <List.Item>
          <Row>
            <Col span={12}>
              <List.Item.Meta
                title={<Text strong>Type</Text>}
                description={
                  <Text italic>
                    Number: {checkout.variant.quantity} x ${checkout.price}
                  </Text>
                }
              />
            </Col>
            <Col span={12}>
              <div>
                <Text strong className="name-bicycle">
                  {checkout.name}
                </Text>
              </div>
            </Col>
          </Row>
        </List.Item>
        <List.Item>
          <Text strong>Provisional</Text>
          <Text italic>${checkout.variant.quantity * checkout.price}</Text>
        </List.Item>
        <List.Item>
          <Text strong>Total</Text>
          <Text type="danger">
            ${checkout.variant.quantity * checkout.price}
          </Text>
        </List.Item>
        <List.Item style={{ justifyContent: 'center' }}>
          10% TAX NOT INCLUDED
        </List.Item>
      </List>
    </div>
  )
}

export default CheckoutInfo
