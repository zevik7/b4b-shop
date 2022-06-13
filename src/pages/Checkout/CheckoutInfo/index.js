import { List, Typography } from 'antd'
import React from 'react'
import './index.less'

const { Title, Text } = Typography

const CheckoutInfo = () => {
  return (
    <div className="info-ctn">
      <div className="info-header">
        <Title level={5}>Info Details</Title>
      </div>
      <List>
        <List.Item>
          <List.Item.Meta
            title={<Text strong>Type</Text>}
            description={<Text italic>Number: 1 x $3000</Text>}
          />
          <div>
            <Text strong>Kid Bike</Text>
          </div>
        </List.Item>
        <List.Item>
          <Text strong>Provisional</Text>
          <Text italic>$3000</Text>
        </List.Item>
        <List.Item>
          <Text strong>Total</Text>
          <Text type="danger">$3000</Text>
        </List.Item>
        <List.Item style={{ justifyContent: 'center' }}>
          10% TAX NOT INCLUDED
        </List.Item>
      </List>
    </div>
  )
}

export default CheckoutInfo
