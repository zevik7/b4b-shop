import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
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

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { bicycleSelectedSelector } from '../../redux/selectors'
import { getBicycle } from '../../redux/bicycle/bicycleSlice'

import './style.less'

const images = [
  {
    original: '/bikeImage/b7fSGdiGDw9t2t5edta6MYRns.avif',
    thumbnail: '/bikeImage/b7fSGdiGDw9t2t5edta6MYRns.avif',
  },
  {
    original: '/bikeImage/PcrXtG5JytjSxmlrF6KcjmU5o.avif',
    thumbnail: '/bikeImage/PcrXtG5JytjSxmlrF6KcjmU5o.avif',
  },
  {
    original: '/bikeImage/mUfm71BbG9VZeTEN9nyyhEj_Q.avif',
    thumbnail: '/bikeImage/mUfm71BbG9VZeTEN9nyyhEj_Q.avif',
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
  const { id } = useParams()
  const dispatch = useDispatch()
  const bicycle = useSelector(bicycleSelectedSelector)

  console.log(bicycle)

  useEffect(() => {
    dispatch(getBicycle(id))
  }, [])

  if (!bicycle.image) return <h1>Loading</h1>

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
                    <ImgCarousel
                      images={bicycle.image.map((img) => ({
                        original: '/bikeImage/' + img,
                        thumbnail: '/bikeImage/' + img,
                      }))}
                    />
                  </Col>
                  <Col span={9}>
                    <div className="detail-wrapper">
                      <div className="detail-wrapper__info">
                        <Text className="available-txt">
                          Availability:{' '}
                          <Text type="secondary">12 in stock</Text>
                        </Text>
                        <Title level={2} className="bicycle-name">
                          {bicycle.name}
                        </Title>
                        <Title level={2} className="price">
                          {bicycle.price} $
                        </Title>
                        <div className="rating-box">
                          <Rate
                            className="rate"
                            allowHalf
                            defaultValue={bicycle.rating}
                          />
                          <Text>{bicycle.rating} reviews</Text>
                        </div>
                        <Divider />
                        <Paragraph className="desc">
                          {bicycle.description}
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
