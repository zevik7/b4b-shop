import React from 'react'
import {
  Col,
  Row,
  Carousel,
  Layout,
  Typography,
  InputNumber,
  Rate,
  Button,
  Image,
} from 'antd'
import {
  SendOutlined,
  RollbackOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons'
import { ImgCarousel } from '../../components'

import './style.less'

const images = [
  'https://m.media-amazon.com/images/I/81wGn2TQJeL._SL1500_.jpg',
  'https://m.media-amazon.com/images/I/71D+KvQQ+7L._SL1500_.jpg',
  'https://m.media-amazon.com/images/I/71Ggj0piYGL._SL1500_.jpg',
]

const { Text, Link, Title, Paragraph } = Typography
const { Header, Footer, Sider, Content } = Layout

const BicycleDetail = () => {
  return (
    <>
      <Layout>
        <Content className="bicycle-detail-page">
          <div className="container">
            <div className="content">
              <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                <Col span={9}>
                  <ImgCarousel
                    imgs={images}
                    imgStyle={{
                      height: '450px',
                    }}
                  />
                </Col>
                <Col span={9}>
                  <div className="detail-wrapper">
                    <div className="detail-wrapper__info">
                      <Text className="available-txt">
                        Availability: <Text type="secondary">12 in stock</Text>
                      </Text>
                      <Title level={2} className="bicycle-name">
                        Tailored Fit Mesh-Panel Polo
                      </Title>
                      <Title level={2} className="price">
                        $400
                      </Title>
                      <div className="rating-box">
                        <Rate className="rate" allowHalf defaultValue={4.5} />
                        <Text>14 reviews</Text>
                      </div>
                      <Title level={5}>COLOR: Red</Title>
                      <Paragraph className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc elementum, augue eget aliquam fringilla, odio elit
                        commodo massa, ut rhoncus odio purus sit amet urna. In
                        purus tortor, semper et molestie a, hendrerit et quam.
                        Nulla bibendum sodales dolor non facilisis. Nunc
                        vehicula ullamcorper felis nec ullamcorper. Suspendisse
                        potenti. Curabitur tincidunt venenatis elit, in congue
                        lacus gravida sed. Praesent eu sollicitudin arcu.
                        Curabitur bibendum ante maximus sem ultrices, id porta
                        nisi laoreet.
                      </Paragraph>
                    </div>
                    <div className="detail-wrapper__buy-box">
                      <InputNumber min={1} max={10} defaultValue={3} />
                      <Button type="primary" size="large">
                        Buy it now
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className="services">
                    <div className="services-item">
                      <div className="services-item__content">
                        <SendOutlined />
                      </div>
                      <div className="services-item__content">
                        <Title level={4}>FREE SHIPPING</Title>
                        <Text>
                          Free shipping on all US order or order above $99
                        </Text>
                      </div>
                    </div>
                    <div className="services-item">
                      <div className="services-item__content">
                        <CustomerServiceOutlined />
                      </div>
                      <div className="services-item__content">
                        <Title level={4}>SUPPORT 24/7</Title>
                        <Text>Contact us 24 hours a day, 7 days a week</Text>
                      </div>
                    </div>
                    <div className="services-item">
                      <div className="services-item__content">
                        <RollbackOutlined />
                      </div>
                      <div className="services-item__content">
                        <Title level={4}>30 DAYS RETURN</Title>
                        <Text>Simply return it within 30 days</Text>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Content>
      </Layout>
    </>
  )
}

export default BicycleDetail
