// import { ShoppingOutlined } from '@ant-design/icons'
import { Card, Skeleton, Space, Typography } from 'antd'
import { Col, Row } from 'antd'
import { useNavigate } from 'react-router-dom'

import './index.less'

const { Meta } = Card
const { Title, Text } = Typography

const BicycleCard = (props) => {
  const { loading, img, title, price, brand, id } = props
  const navigate = useNavigate()

  return (
    <Card
      className="bicycle-card"
      hoverable
      bordered={true}
      cover={
        loading ? (
          <Skeleton.Avatar
            active={true}
            shape={'square'}
            className="img-cover"
          />
        ) : (
          <img
            className="img-cover"
            alt="bicycle"
            src={'/images/bikes/' + img}
          />
        )
      }
      onClick={() => navigate(`/shop/Bicycle-detail/${id}`)}
    >
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <Title ellipsis={true} level={5}>
            {loading ? <Skeleton.Input active={true} size="small" /> : title}
          </Title>
          <Space
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              overflow: 'hidden',
              maxHeight: '22px',
            }}
          >
            <Text>
              {loading ? <Skeleton.Input active={true} size="small" /> : price}
            </Text>
            <Text>
              {loading ? <Skeleton.Input active={true} size="small" /> : brand}
            </Text>
          </Space>
        </Col>
      </Row>
    </Card>
  )
}

export default BicycleCard
