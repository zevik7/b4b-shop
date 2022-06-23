import { Col, List, Row, Typography } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'

import { checkoutSelector } from '../../../redux/selectors'
import './index.less'

const { Title, Text } = Typography

const CheckoutInfo = () => {
  const checkout = useSelector(checkoutSelector)

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
                    Number: {checkout.bicycle.variant.quantity} x $
                    {checkout.bicycle.price}
                  </Text>
                }
              />
            </Col>
            <Col span={12}>
              <div>
                <Text strong className="name-bicycle">
                  {checkout.bicycle.name}
                </Text>
              </div>
            </Col>
          </Row>
        </List.Item>
        <List.Item>
          <Text strong>Provisional</Text>
          <Text italic>
            ${checkout.bicycle.variant.quantity * checkout.bicycle.price}
          </Text>
        </List.Item>
        <List.Item>
          <Text strong>Total</Text>
          <Text type="danger">
            ${checkout.bicycle.variant.quantity * checkout.bicycle.price}
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
