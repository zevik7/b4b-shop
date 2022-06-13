// import { ShoppingOutlined } from '@ant-design/icons'
import { Button, Card, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Col, Row } from 'antd'
import './index.less'

const { Meta } = Card
const { Title } = Typography

const BicycletCard = () => {
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
        <img
          className="img-card"
          alt="bicycle"
          src="https://m.media-amazon.com/images/I/81wGn2TQJeL._SL1500_.jpg"
        />
      }
      onClick={() => navigate('/shop/bicycle-detail/:id')}
    >
      <div className="footer-card">
        <Row style={{ marginBottom: 12 }}>
          <Col>
            <Meta
              title={<Title level={5}>Tailored Fit Mesh-Panel Polo</Title>}
              className="title"
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Meta description="Price: $200" className="title" />
          </Col>
          <Col className="product-brand" span={12}>
            <span>Brand: Fuij</span>
          </Col>
        </Row>
      </div>
    </Card>
  )
}

export default BicycletCard
