import { Col, Divider, Row } from 'antd'
import React from 'react'

import batch from '../../assets/images/brands/batch.avif'
import cannondale from '../../assets/images/brands/cannondale.avif'
import dirwin from '../../assets/images/brands/dirwin.avif'
import felt from '../../assets/images/brands/felt.avif'
import fouriii from '../../assets/images/brands/fouriii.avif'
import fuji from '../../assets/images/brands/fuji.avif'
import giant from '../../assets/images/brands/giant.avif'
import sole from '../../assets/images/brands/sole.avif'

import './brandlist.less'

const BrandList = () => {
  return (
    <div className="brand-list">
      <div className="container">
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
          <Col lg={6} sm={8} xs={12}>
            <img src={batch} alt="" />
          </Col>
          <Col lg={6} sm={8} xs={12}>
            <img src={cannondale} alt="" />
          </Col>
          <Col lg={6} sm={8} xs={12}>
            <img src={dirwin} alt="" />
          </Col>
          <Col lg={6} sm={8} xs={12}>
            <img src={felt} alt="" />
          </Col>
          <Col lg={6} sm={8} xs={12}>
            <img src={fouriii} alt="" />
          </Col>
          <Col lg={6} sm={8} xs={12}>
            <img src={fuji} alt="" />
          </Col>
          <Col lg={6} sm={8} xs={12}>
            <img src={giant} alt="" />
          </Col>
          <Col lg={6} sm={8} xs={12}>
            <img src={sole} alt="" />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default BrandList
