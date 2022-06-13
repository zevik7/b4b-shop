import { Col, Layout, Row, Typography } from 'antd'
import '../../assets/less/grid.less'
import { BicycleFooter, HomeNavigation } from '../../components'
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
                <Col span={14}>
                  <CheckoutForm />
                </Col>
                <Col span={9}>
                  <CheckoutInfo />
                </Col>
              </Row>
            </div>
          </div>
        </Content>
        <BicycleFooter />
      </Layout>
    </>
  )
}

export default Checkout
