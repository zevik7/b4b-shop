import { Col, Layout, Row, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import '../../assets/less/grid.less'
import { HomeFooter, HomeNavigation } from '../../components'
import { fetchCheckouts, getCheckout } from '../../redux/slices'
import CheckoutForm from './CheckoutForm'
import CheckoutInfo from './CheckoutInfo'
import './index.less'

const { Title } = Typography
const { Header, Content, Footer } = Layout

const Checkout = () => {
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
                  <CheckoutForm />
                </Col>
                <Col xxl={9} xl={9} lg={9} md={24} sm={24} xs={24}>
                  <CheckoutInfo />
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
