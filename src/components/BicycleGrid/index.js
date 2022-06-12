import React from 'react'
import './index.less'
import { Col, Row, Slider } from 'antd'
import { useState } from 'react'
import ProductCard from '../BicycleCard'

const gutters = {}
const vgutters = {}
const colCounts = {}
;[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  gutters[i] = value
})
;[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  vgutters[i] = value
})
;[2, 3, 4, 6, 8, 12].forEach((value, i) => {
  colCounts[i] = value
})

const BicycleGrid = () => {
  return (
    <>
      <div
        style={{
          width: '50%',
          marginBottom: 48,
        }}
      ></div>
      <Row gutter={[16, 16]} className="row-productGrid">
        <Col span={8}>
          <ProductCard />
        </Col>
        <Col span={8}>
          <ProductCard />
        </Col>
        <Col span={8}>
          <ProductCard />
        </Col>

        <Col span={8}>
          <ProductCard />
        </Col>
        <Col span={8}>
          <ProductCard />
        </Col>
        <Col span={8}>
          <ProductCard />
        </Col>
      </Row>
    </>
  )
}

export default BicycleGrid
