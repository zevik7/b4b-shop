import { Col, Divider, Row, Typography } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

import bikehelp from '../../../assets/images/features/bikehelp.gif'
import mack from '../../../assets/images/features/mack.avif'
import pulse from '../../../assets/images/features/pulse.avif'
import ride from '../../../assets/images/features/ride.avif'
import './style.less'

const { Title } = Typography

const Features = () => {
  const { t } = useTranslation()

  return (
    <div className="features">
      <div className="features-list">
        <Title level={2}>{t('home-page.retailer.title')}</Title>
        <Row
          gutter={[
            {
              xs: 7,
              sm: 14,
              md: 20,
            },
            {
              xs: 7,
              sm: 14,
              md: 20,
            },
          ]}
        >
          <Col lg={8} sm={12} xs={24}>
            <img src={mack} alt="mack" />
          </Col>
          <Col lg={8} sm={12} xs={24}>
            <img src={pulse} alt="pulse" />
          </Col>
          <Col lg={8} sm={12} xs={24}>
            <img src={ride} alt="ride" />
          </Col>
        </Row>
      </div>
      <div className="features-help">
        <Row>
          <Col span={12} offset={6}>
            <p className="content-center">
              {t('home-page.retailer.description')}
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <img src={bikehelp} alt="bikehelp" />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Features
