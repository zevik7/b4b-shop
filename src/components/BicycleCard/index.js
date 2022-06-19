// import { ShoppingOutlined } from '@ant-design/icons'
import { Skeleton, Card, Typography, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Col, Row } from 'antd'
import './index.less'

const { Meta } = Card
const { Title, Text } = Typography

const BicycleCard = (props) => {
  const { loading, img, title, price, brand, id } = props
  const navigate = useNavigate()

  return (
    <Card
      className="product-card"
      hoverable
      bordered={true}
      cover={
        loading ? (
          <Skeleton.Avatar
            className="img-card"
            active={true}
            shape={'square'}
          />
        ) : (
          <img className="img-card" alt="bicycle" src={'/bikeImage/' + img} />
        )
      }
      onClick={() => navigate(`/shop/Bicycle-detail/${id}`)}
    >
      <Row gutter={[16, 16]}>
        <Col span={24}>
          {loading ? (
            <Skeleton.Input active={true} width="100%" />
          ) : (
            <Title ellipsis={true} level={5}>
              {title}
            </Title>
          )}
        </Col>
        <Col span={24}>
          <Space
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {loading ? (
              <Space
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Skeleton.Input active={true} width="100%" />
              </Space>
            ) : (
              <>
                <Meta description={`Price: $${price}`} className="title" />
                <Meta description={`Brand: $${brand}`} className="title" />
              </>
            )}
          </Space>
        </Col>
      </Row>
    </Card>
  )
}

export default BicycleCard
