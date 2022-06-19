import { List, Typography } from 'antd'
import React from 'react'
import './index.less'
import { useDispatch, useSelector } from "react-redux";
import { checkoutSelectedSelector, checkoutsSelector } from "../../../redux/selectors";

const { Title, Text } = Typography

const CheckoutInfo = () => {
  const checkoutSelected = useSelector(checkoutSelectedSelector);
  return (
    <div className="info-ctn">
      <div className="info-header">
        <Title level={5}>Info Details</Title>
      </div>
      <List>
        <List.Item>
          <List.Item.Meta
            title={<Text strong>Type</Text>}
            description={<Text italic>Number: {checkoutSelected.bicycle.quantity} x ${checkoutSelected.bicycle.price}</Text>}
          />
          <div>
            <Text strong>{checkoutSelected.bicycle.name}</Text>
          </div>
        </List.Item>
        <List.Item>
          <Text strong>Provisional</Text>
          <Text italic>${checkoutSelected.bicycle.quantity * checkoutSelected.bicycle.price}</Text>
        </List.Item>
        <List.Item>
          <Text strong>Total</Text>
          <Text type="danger">${checkoutSelected.bicycle.quantity * checkoutSelected.bicycle.price}</Text>
        </List.Item>
        <List.Item style={{ justifyContent: 'center' }}>
          10% TAX NOT INCLUDED
        </List.Item>
      </List>
    </div>
  )
}

export default CheckoutInfo
