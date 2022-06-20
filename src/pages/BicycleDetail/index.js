import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Col,
  Row,
  Layout,
  Typography,
  InputNumber,
  Rate,
  Button,
  Divider,
  Form,
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
  HomeFooter,
} from '../../components'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { bicycleSelectedSelector } from '../../redux/selectors'
import { getBicycle, setCheckoutBicycle } from '../../redux/slices'
import './style.less'

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

const { Text, Link, Title, Paragraph } = Typography
const { Header, Footer, Sider, Content } = Layout

const BicycleDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const dispatch = useDispatch()
  const bicycle = useSelector(bicycleSelectedSelector)
  const [form, setForm] = useState({
    id,
    name: '',
    price: '',
    variantIndex: 0,
    quantity: 1,
  })

  useEffect(() => {
    dispatch(getBicycle(id))
    setForm({
      ...form,
      name: bicycle.name,
      price: bicycle.price,
    })
  }, [])

  const detailComponentsData = [
    {
      key: '1',
      name: 'Brand',
      value: bicycle.brand,
    },
    {
      key: '2',
      name: 'Type',
      value: bicycle.type,
    },
    {
      key: '3',
      name: 'Gender',
      value: bicycle.gender,
    },
    {
      key: '4',
      name: 'Material',
      value: bicycle.material,
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

  const selectTypeOptions = bicycle.variants.map((variant, i) => ({
    key: i,
    value: `${variant.color} / ${variant.frame} / ${variant.size}`,
  }))

  const handleSelectChange = (key) => {
    setForm({ ...form, variantIndex: key })
  }

  const handleSubmit = () => {
    const variant = bicycle.variants.find(
      (variant, i) => i == form.variantIndex
    )

    const bicycleCheckout = {
      id: form.id,
      name: form.name,
      price: form.price,
      variant: { ...variant, quantity: form.quantity },
    }

    dispatch(setCheckoutBicycle(bicycleCheckout))
    navigate('/checkout')
  }

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
                      images={bicycle.images.map((img) => ({
                        original: '/images/bikes/' + img,
                        thumbnail: '/images/bikes/' + img,
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
                                options={selectTypeOptions}
                                defaultValue={form.variantIndex.toString()}
                                onChange={handleSelectChange}
                              />
                            </Form.Item>
                            <Form.Item
                              className="input-num-item"
                              name="quantity"
                              label="Quantity"
                            >
                              <InputNumber
                                min={1}
                                max={4}
                                defaultValue={form.quantity}
                                onChange={(value) =>
                                  setForm({ ...form, quantity: value })
                                }
                              />
                            </Form.Item>
                          </div>
                          <Form.Item>
                            <Button
                              className="submit-btn"
                              type="primary"
                              size="large"
                              htmlType="submit"
                              onClick={handleSubmit}
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
        <HomeFooter />
      </Layout>
    </>
  )
}

export default BicycleDetail
