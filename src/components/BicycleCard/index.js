import React from 'react'
import './index.less'
import { Avatar, Card } from 'antd'
import { Col, Divider, Row } from 'antd'
import { Button, Tooltip } from 'antd'
import { ShoppingOutlined } from '@ant-design/icons'
import { Space } from 'antd'

const { Meta } = Card

const BicycletCard = () => {
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <img
          alt="example"
          src="https://m.media-amazon.com/images/I/81wGn2TQJeL._SL1500_.jpg"
        />
      }
      className="product-card"
    >
      <Meta
        title="Product Name"
        description="Price: $200"
        className="title"
      />

<Button type="primary" shape="circle" icon={<ShoppingOutlined />} />
    </Card>
  )
}

export default BicycletCard
