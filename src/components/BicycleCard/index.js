import { ShoppingOutlined } from '@ant-design/icons'
import { Button, Card, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
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
        <Meta
          title={<Title level={5}>Bicycle</Title>}
          description="Price: $200"
          className="title"
        />
        <Button
          className="btn-cash"
          type="primary"
          shape="circle"
          icon={<ShoppingOutlined />}
        />
      </div>
    </Card>
  )
}

export default BicycletCard
