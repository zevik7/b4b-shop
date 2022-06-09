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
} from 'antd'
import {
  SendOutlined,
  RollbackOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons'

import './style.less'

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

const { Text, Link, Title } = Typography
const { Header, Footer, Sider, Content } = Layout

const BicycleDetail = () => {
  return (
    <>
      <Layout>
        <Content className="bicycle-detail">
          <div className="container">
            <div className="content">
              <Row>
                <Col span={9}>
                  <Carousel autoplay>
                    <div>
                      <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                      <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                      <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                      <h3 style={contentStyle}>4</h3>
                    </div>
                  </Carousel>
                </Col>
                <Col span={9}>
                  <Text type="secondary">Availability: 12 in stock</Text>
                  <Title>Tailored Fit Mesh-Panel Polo</Title>
                  <Title level={2}>$400</Title>
                  <div className="rating-box">
                    <Rate allowHalf defaultValue={4.5} />
                    <Text>14 reviews</Text>
                  </div>
                  <div className="type">
                    <Text>COLOR: Red</Text>
                  </div>
                  <div className="buy-box">
                    <InputNumber min={1} max={10} defaultValue={3} />
                    <Button type="primary" size="large">
                      Buy it now
                    </Button>
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
