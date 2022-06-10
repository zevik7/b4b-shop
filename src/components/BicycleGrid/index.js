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
  const [gutterKey, setGutterKey] = useState(1)
  const [vgutterKey, setVgutterKey] = useState(1)
  const [colCountKey, setColCountKey] = useState(2)
  const cols = []
  const colCount = colCounts[colCountKey]
  let colCode = ''

  // for (let i = 0; i < colCount; i++) {
  //   cols.push(
  //     <Col key={i.toString()} span={24 / colCount}>
  //       <div>Column</div>
  //     </Col>,
  //   );
  //   colCode += `  <Col span={${24 / colCount}} />\n`;
  // }

  return (
    <>
      <div
        style={{
          width: '50%',
          marginBottom: 48,
        }}
      >
        {/* <Slider
        min={0}
        max={Object.keys(colCounts).length - 1}
        value={colCountKey}
        onChange={setColCountKey}
        marks={colCounts}
        step={null}
        tipFormatter={(value) => value && colCounts[value]}
      /> */}
      </div>
      <Row gutter={[8, 8]} className="row-productGrid">
        {/* {cols}
      {cols} */}
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
      {/* <Row gutter={[8, 8]} className="row-productGrid">
      <Col span={8}><ProductCard/></Col>
      <Col span={8}><ProductCard/></Col>
      <Col span={8}><ProductCard/></Col>
    </Row> */}
      <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>
        {/* {cols}
      {cols} */}
      </Row>
    </>
  )
}

export default BicycleGrid
