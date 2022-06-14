// import { ShoppingOutlined } from '@ant-design/icons'
import { Button, Card, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Col, Row } from 'antd'
import './index.less'

const { Meta } = Card
const { Title } = Typography

const BicycletCard = (props) => {
  const { img, title, price, brand } = props
  const navigate = useNavigate()

  return (
    <Card
      className="product-card"
      hoverable
      bordered={true}
      style={{
        width: '100%',
      }}
      cover={
        <img className="img-card" alt="bicycle" src={'/bikeImage/' + img} />
      }
      onClick={() => navigate('/shop/Bicycle-detail/:id')}
    >
      <div className="footer-card">
        <Row style={{ marginBottom: 12 }}>
          <Col span={24}>
            <Meta
              title={
                <Title ellipsis={true} level={5}>
                  {title}
                </Title>
              }
              className="title"
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Meta description={`Price: $${price}`} className="title" />
          </Col>
          <Col className="product-brand" span={12}>
            <span>Brand: {brand}</span>
          </Col>
        </Row>
      </div>
    </Card>
  )
}

export default BicycletCard
