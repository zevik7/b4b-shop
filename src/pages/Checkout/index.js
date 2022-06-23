import {
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Col, Form, Input, Layout, List, Row, Typography, message } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import '../../assets/less/grid.less'
import { HomeFooter, HomeNavigation, MessageButton } from '../../components'
import { createCheckout } from '../../redux/slices'
import './index.less'

const { Title, Text } = Typography
const { Content } = Layout

const Checkout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [bicycle, setBicycle] = useState({})

  useEffect(() => {
    if (!localStorage.getItem('bicycleInfos')) {
      navigate('/*')
    }
    setBicycle(JSON.parse(localStorage.getItem('bicycleInfos')))
  }, [navigate])

  const onFinish = (form) => {
    let data = {
      user: {
        name: form.fullname,
        email: form.email,
        phone: form.phone,
        address: form.address,
      },
      bicycle,
      note: form.note,
    }

    dispatch(createCheckout(data))
    localStorage.removeItem('bicycleInfos')
    message.success('Order successful!')

    setTimeout(() => {
      navigate('/shop')
    }, 2000)
  }

  if (Object.keys(bicycle).length === 0) return

  return (
    <>
      <Layout>
        <HomeNavigation />
        <Content>
          <div className="container checkout-ctn">
            <div className="checkout-content">
              <Title level={2}>CHECKOUT DETAILS</Title>
              <Row style={{ gap: '2rem' }}>
                <Col xxl={14} xl={14} lg={14} md={24} sm={24} xs={24}>
                  <div className="form-ctn">
                    <div className="form-header">
                      <Title level={5}>Check Out Details</Title>
                    </div>
                    <Form
                      size="large"
                      labelCol={{
                        span: 3,
                      }}
                      wrapperCol={{
                        span: 24,
                      }}
                      layout="horizontal"
                      onFinish={onFinish}
                    >
                      <Form.Item
                        name="fullname"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your fullname!',
                          },
                        ]}
                      >
                        <Input
                          prefix={
                            <UserOutlined className="site-form-item-icon" />
                          }
                          placeholder="Full Name"
                        />
                      </Form.Item>
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your email!',
                          },
                        ]}
                      >
                        <Input
                          prefix={
                            <MailOutlined className="site-form-item-icon" />
                          }
                          placeholder="Email"
                          rules={[
                            {
                              type: 'email',
                              message: 'The input is not valid E-mail!',
                            },
                            {
                              required: true,
                              message: 'Please input your E-mail!',
                            },
                          ]}
                        />
                      </Form.Item>
                      <Form.Item
                        name="address"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your address!',
                          },
                        ]}
                      >
                        <Input
                          prefix={
                            <HomeOutlined className="site-form-item-icon" />
                          }
                          placeholder="Address"
                        />
                      </Form.Item>

                      <Form.Item
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your phone number!',
                          },
                        ]}
                      >
                        <Input
                          placeholder="Phone Number"
                          prefix={
                            <PhoneOutlined className="site-form-item-icon" />
                          }
                        />
                      </Form.Item>

                      <Form.Item name="note">
                        <Input.TextArea
                          showCount
                          maxLength={500}
                          rows={6}
                          placeholder="Write your note here ..."
                        />
                      </Form.Item>

                      <Form.Item>
                        <MessageButton />
                      </Form.Item>
                    </Form>
                  </div>
                </Col>
                <Col xxl={9} xl={9} lg={9} md={24} sm={24} xs={24}>
                  <div className="info-ctn">
                    <div className="info-header">
                      <Title level={5}>Info Details</Title>
                    </div>
                    <List>
                      <List.Item>
                        <Row>
                          <Col span={12}>
                            <List.Item.Meta
                              title={<Text strong>Type</Text>}
                              description={
                                <Text italic>
                                  Number: {bicycle.variant.quantity} x $
                                  {bicycle.price}
                                </Text>
                              }
                            />
                          </Col>
                          <Col span={12}>
                            <div>
                              <Text strong className="name-bicycle">
                                {bicycle.name}
                              </Text>
                            </div>
                          </Col>
                        </Row>
                      </List.Item>
                      <List.Item>
                        <Text strong>Provisional</Text>
                        <Text italic>
                          ${bicycle.variant.quantity * bicycle.price}
                        </Text>
                      </List.Item>
                      <List.Item>
                        <Text strong>Total</Text>
                        <Text type="danger">
                          ${bicycle.variant.quantity * bicycle.price}
                        </Text>
                      </List.Item>
                      <List.Item style={{ justifyContent: 'center' }}>
                        10% TAX NOT INCLUDED
                      </List.Item>
                    </List>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Content>
        <HomeFooter />
      </Layout>
    </>
  )
}

export default Checkout
