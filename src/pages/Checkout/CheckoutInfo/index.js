import { List, Typography } from 'antd'
import React from 'react'
import './index.less'
import { useDispatch, useSelector } from 'react-redux'
import { checkoutSelector } from '../../../redux/selectors'

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
          <List.Item.Meta
            title={<Text strong>Type</Text>}
            description={
              <Text italic>
                Number: {checkout.bicycle.variant.quantity} x $
                {checkout.bicycle.price}
              </Text>
            }
          />
          <div>
            <Text strong>{checkout.bicycle.name}</Text>
          </div>
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
