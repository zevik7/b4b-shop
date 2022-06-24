import {
  CustomerServiceOutlined,
  RollbackOutlined,
  SendOutlined,
} from '@ant-design/icons'
import {
  Button,
  Col,
  Divider,
  InputNumber,
  Layout,
  Rate,
  Row,
  Typography,
} from 'antd'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import {
  HomeFooter,
  HomeNavigation,
  ImgCarousel,
  Select,
  Table,
} from '../../components'
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

const { Text, Title, Paragraph } = Typography
const { Content } = Layout

const BicycleDetail = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  const bicycle = useSelector(bicycleSelectedSelector)
  const [form, setForm] = useState({
    variantIndex: 0,
    quantity: 1,
  })

  const { t } = useTranslation()

  useEffect(() => {
    dispatch(getBicycle(id))
  }, [id, dispatch])

  const detailComponentsData = [
    {
      key: 1,
      name: `${t('detail-page.bicycle-part.item.brand')}`,
      value: bicycle.brand,
    },
    {
      key: 2,
      name: `${t('detail-page.bicycle-part.item.type')}`,
      value: bicycle.type,
    },
    {
      key: 3,
      name: `${t('detail-page.bicycle-part.item.gender')}`,
      value: bicycle.gender,
    },
    {
      key: 4,
      name: `${t('detail-page.bicycle-part.item.material')}`,
      value: bicycle.material,
    },
    {
      key: 5,
      name: `${t('detail-page.bicycle-part.item.groupset')}`,
      value: 'Shimano Claris',
    },
    {
      key: 6,
      name: `${t('detail-page.bicycle-part.item.braking-type')}`,
      value: 'Rim Brakes',
    },
    {
      key: 7,
      name: `${t('detail-page.bicycle-part.item.item-condition')}`,
      value: 'New',
    },
    {
      key: 8,
      name: `${t('detail-page.bicycle-part.item.availability')}`,
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
      (variant, i) => i === form.variantIndex
    )

    const bicycleCheckout = {
      id: bicycle.id,
      name: bicycle.name,
      price: bicycle.price,
      variant: { ...variant, quantity: form.quantity },
    }

    dispatch(setCheckoutBicycle(bicycleCheckout))
    localStorage.setItem('bicycleInfos', JSON.stringify(bicycleCheckout))
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
                  <Col lg={18} md={16} xs={24}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                      <Col lg={12} md={24}>
                        <ImgCarousel
                          images={bicycle.images.map((img) => ({
                            original: '/images/bikes/' + img,
                            thumbnail: '/images/bikes/' + img,
                          }))}
                        />
                      </Col>
                      <Col lg={12} md={24}>
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
                            <div layout="vertical" className="wrapper">
                              <Row gutter={[8, 8]}>
                                <Col span={16}>
                                  <Text>Select variant</Text>
                                  <Select
                                    options={selectTypeOptions}
                                    defaultValue={form.variantIndex.toString()}
                                    onChange={handleSelectChange}
                                  />
                                </Col>
                                <Col span={8}>
                                  <Text>Quantity</Text>
                                  <InputNumber
                                    min={1}
                                    max={4}
                                    defaultValue={form.quantity}
                                    onChange={(value) =>
                                      setForm({ ...form, quantity: value })
                                    }
                                  />
                                </Col>
                              </Row>
                              <Button
                                className="submit-btn"
                                type="primary"
                                size="large"
                                htmlType="submit"
                                onClick={handleSubmit}
                              >
                                BUY IT NOW
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={6} md={8} xs={24}>
                    <div className="services">
                      <div className="services-item">
                        <div className="services-item__icon">
                          <SendOutlined />
                        </div>
                        <div className="services-item__content">
                          <Title level={4}>
                            {t('detail-page.banner.free-shipping.title')}
                          </Title>
                          <Text type="secondary">
                            {t('detail-page.banner.free-shipping.content')}
                          </Text>
                        </div>
                      </div>
                      <div className="services-item">
                        <div className="services-item__icon">
                          <CustomerServiceOutlined />
                        </div>
                        <div className="services-item__content">
                          <Title level={4}>
                            {t('detail-page.banner.support.title')}
                          </Title>
                          <Text type="secondary">
                            {t('detail-page.banner.support.content')}
                          </Text>
                        </div>
                      </div>
                      <div className="services-item">
                        <div className="services-item__icon">
                          <RollbackOutlined />
                        </div>
                        <div className="services-item__content">
                          <Title level={4}>
                            {t('detail-page.banner.return-title.title')}
                          </Title>
                          <Text type="secondary">
                            {t('detail-page.banner.return-title.content')}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bicycle-parts">
                      <Title level={5}>
                        {t('detail-page.bicycle-part.title')}
                      </Title>
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
