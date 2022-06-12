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
  Divider,
  Form,
  Input,
} from 'antd'
import {
  SendOutlined,
  RollbackOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons'
import {
  ImgCarousel,
  HomeNavigation,
  Table,
  Select,
  BicycleFooter,
} from '../../components'

import './style.less'

const images = [
  {
    original: 'https://m.media-amazon.com/images/I/81wGn2TQJeL._SL1500_.jpg',
    thumbnail: 'https://m.media-amazon.com/images/I/81wGn2TQJeL._SL1500_.jpg',
  },
  {
    original: 'https://m.media-amazon.com/images/I/71D+KvQQ+7L._SL1500_.jpg',
    thumbnail: 'https://m.media-amazon.com/images/I/71D+KvQQ+7L._SL1500_.jpg',
  },
  {
    original: 'https://m.media-amazon.com/images/I/71Ggj0piYGL._SL1500_.jpg',
    thumbnail: 'https://m.media-amazon.com/images/I/71Ggj0piYGL._SL1500_.jpg',
  },
]

const detailComponentsData = [
  {
    key: '1',
    name: 'Brand',
    value: 'Fuij',
  },
  {
    key: '2',
    name: 'Type',
    value: 'Road Bikes',
  },
  {
    key: '3',
    name: 'Gender',
    value: 'Unisex',
  },
  {
    key: '4',
    name: 'Material',
    value: 'Alumium',
  },
  {
    key: '5',
    name: 'Groupset',
    value: 'Shimano Claris',
  },
  {
    key: '6',
    name: 'Braking Type',
    value: 'Rim Brakes',
  },
  {
    key: '7',
    name: 'Item condition',
    value: 'New',
  },
  {
    key: '8',
    name: 'Availability',
    value: 'Buy online, In-store',
  },
]

const detailComponentsColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    className: 'name-column',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
]

const selectOptions = [
  {
    key: 'Grey / 52cm / Small',
    value: 'Grey / 52cm / Small',
  },
  { key: 'Grey / 49cm / XS/S', value: 'Grey / 49cm / XS/S' },
  { key: 'Grey / 54cm / Medium', value: 'Grey / 54cm / Medium' },
]

const { Text, Link, Title, Paragraph } = Typography
const { Header, Footer, Sider, Content } = Layout

const formLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
}
const formTailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const BicycleDetail = () => {
  return (
    <>
      <Layout>
        <HomeNavigation />
        <Content>
          <div className="bicycle-detail-page">
            <div className="container">
              <div className="content">
                <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                  <Col span={9}>
                    <ImgCarousel images={images} />
                  </Col>
                  <Col span={9}>
                    <div className="detail-wrapper">
                      <div className="detail-wrapper__info">
                        <Text className="available-txt">
                          Availability:{' '}
                          <Text type="secondary">12 in stock</Text>
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
                        <Divider />
                        <Paragraph className="desc">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc elementum, augue eget aliquam fringilla,
                          odio elit commodo massa, ut rhoncus odio purus sit
                          amet urna. In purus tortor, semper et molestie a,
                          hendrerit et quam. Nulla bibendum sodales dolor non
                          facilisis. Nunc vehicula ullamcorper felis nec
                          ullamcorper. Suspendisse potenti. Curabitur tincidunt
                          venenatis elit, in congue lacus gravida sed. Praesent
                          eu sollicitudin arcu. Curabitur bibendum ante maximus
                          sem ultrices, id porta nisi laoreet.
                        </Paragraph>
                      </div>
                      <div className="detail-wrapper__buy-box">
                        <Form layout="vertical" className="form">
                          <div className="form-content">
                            <Form.Item
                              className="select-item"
                              name="select-type"
                              label="Select Color, Size CM, and Size"
                            >
                              <Select
                                options={selectOptions}
                                defaultValue="Grey / 49cm / XS/S"
                              />
                            </Form.Item>
                            <Form.Item
                              className="input-num-item"
                              name="quantity"
                              label="Quantity"
                            >
                              <InputNumber min={1} max={10} defaultValue={3} />
                            </Form.Item>
                          </div>
                          <Form.Item>
                            <Button
                              className="submit-btn"
                              type="primary"
                              size="large"
                              htmlType="submit"
                            >
                              BUY IT NOW
                            </Button>
                          </Form.Item>
                        </Form>
                      </div>
                    </div>
                  </Col>
                  <Col span={6}>
                    <div className="services">
                      <div className="services-item">
                        <div className="services-item__icon">
                          <SendOutlined />
                        </div>
                        <div className="services-item__content">
                          <Title level={4}>FREE SHIPPING</Title>
                          <Text type="secondary">
                            Free shipping on all US order or order above $99
                          </Text>
                        </div>
                      </div>
                      <div className="services-item">
                        <div className="services-item__icon">
                          <CustomerServiceOutlined />
                        </div>
                        <div className="services-item__content">
                          <Title level={4}>SUPPORT 24/7</Title>
                          <Text type="secondary">
                            Contact us 24 hours a day, 7 days a week
                          </Text>
                        </div>
                      </div>
                      <div className="services-item">
                        <div className="services-item__icon">
                          <RollbackOutlined />
                        </div>
                        <div className="services-item__content">
                          <Title level={4}>30 DAYS RETURN</Title>
                          <Text type="secondary">
                            Simply return it within 30 days
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bicycle-parts">
                      <Title level={5}>Bicycle parts</Title>
                      <Table
                        data={detailComponentsData}
                        cols={detailComponentsColumns}
                        showHeader={false}
                        bordered={true}
                        pagination={false}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Content>
        <BicycleFooter />
      </Layout>
    </>
  )
}

export default BicycleDetail
