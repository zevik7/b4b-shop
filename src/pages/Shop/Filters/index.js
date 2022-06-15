import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import './style.less'

import BicycleCard from '../../../components/BicycleCard'
import BicyclePagination from '../../../components/BicyclePagination'

import {
  Button,
  Checkbox,
  Collapse,
  InputNumber,
  Slider,
  Space,
  Tooltip,
  Typography,
  Layout,
} from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import BicycleFooter from '../../../components/BicycleFooter'

import { HomeNavigation } from '../../../components'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import filterSlice from './filterSlice'

const { Title } = Typography
const { Panel } = Collapse
const { Content } = Layout

const optionTypes = [
  {
    label: 'Mountain Bikes',
    value: 'Mountain Bikes',
  },
  {
    label: 'Road Bikes',
    value: 'Road Bikes',
  },
  {
    label: 'Kids Bikes',
    value: 'Kids Bikes',
  },
  {
    label: 'Folding Bikes',
    value: 'Folding Bikes',
  },
  {
    label: 'Electric Bikes',
    value: 'Electric Bikes',
  },
]

const optionColors = [
  {
    label: 'Red',
    value: 'Red',
  },
  {
    label: 'Blue',
    value: 'Blue',
  },
  {
    label: 'Black',
    value: 'Black',
  },
  {
    label: 'Carbon',
    value: 'Carbon',
  },
  {
    label: 'Mint Green',
    value: 'Mint Green',
  },
  {
    label: 'Silver',
    value: 'Silver',
  },
  {
    label: 'Teal',
    value: 'Teal',
  },
]

const optionGenders = [
  {
    label: 'Mens',
    value: 'Mens',
  },
  {
    label: 'Womens',
    value: 'Womens',
  },
  {
    label: 'Unisex',
    value: 'Unisex',
  },
]

const optionBrands = [
  {
    label: 'Marin',
    value: 'Marin',
  },
  {
    label: 'Scott',
    value: 'Scott',
  },
  {
    label: 'Giant',
    value: 'Giant',
  },
  {
    label: 'Fuji',
    value: 'Fuji',
  },
]

const optionMaterials = [
  {
    label: 'Carbon',
    value: 'Carbon',
  },
  {
    label: 'Aluminum',
    value: 'Aluminum',
  },
]

const Filter = () => {
  const [inputValue, setInputValue] = useState(100)
  const [inputValue2, setInputValue2] = useState(10000)

  const dispatch = useDispatch()

  const onChange = (value) => {
    console.log('onChange: ', value)
  }

  const handleTypeChange = (value) => {
    dispatch(filterSlice.actions.typeChange(value))
  }

  const handleColorChange = (value) => {
    dispatch(filterSlice.actions.colorChange(value))
  }

  const handleGenderChange = (value) => {
    console.log(value)
    dispatch(filterSlice.actions.genderChange(value))
  }

  const handleBrandChange = (value) => {
    dispatch(filterSlice.actions.brandChange(value))
  }

  const handleMaterialChange = (value) => {
    dispatch(filterSlice.actions.materialChange(value))
  }

  const handleChangeSlider = (value) => {
    console.log('onChange: ', value)
    setInputValue(value[0])
    setInputValue2(value[1])
  }

  const onAfterChangeSlider = (values) => {
    console.log('onAfterChange: ', values)
    dispatch(filterSlice.actions.priceChange(values))
  }

  return (
    <div className="filter-bar-ctn">
      <Collapse
        className="filter-bar"
        style={{ height: '100%', borderRight: 0 }}
        defaultActiveKey={['1', '2', '3', '4', '5', '6']}
        onChange={onChange}
        expandIconPosition="end"
        bordered={false}
      >
        <Panel header={<Title level={5}>Price</Title>} key="1">
          <div className="price-input">
            <Space>
              <InputNumber
                disabled
                min={100}
                max={9999}
                defaultValue={100}
                value={inputValue}
                onChange={handleChangeSlider}
              />
              <InputNumber
                disabled
                min={101}
                max={10000}
                defaultValue={10000}
                value={inputValue2}
                onChange={handleChangeSlider}
              />
            </Space>
          </div>

          <Slider
            range
            min={100}
            max={10000}
            defaultValue={[100, 10000]}
            onChange={handleChangeSlider}
            onAfterChange={onAfterChangeSlider}
          />
        </Panel>
        <Panel header={<Title level={5}>Type</Title>} key="2">
          <Space direction="vertical">
            <Checkbox.Group options={optionTypes} onChange={handleTypeChange} />
          </Space>
        </Panel>
        <Panel header={<Title level={5}>Color</Title>} key="3">
          <Space direction="vertical">
            <Checkbox.Group
              options={optionColors}
              onChange={handleColorChange}
            />
          </Space>
        </Panel>
        <Panel header={<Title level={5}>Gender</Title>} key="4">
          <Space direction="vertical">
            <Checkbox.Group
              options={optionGenders}
              onChange={handleGenderChange}
            />
          </Space>
        </Panel>
        <Panel header={<Title level={5}>Brand</Title>} key="5">
          <Space direction="vertical">
            <Checkbox.Group
              options={optionBrands}
              onChange={handleBrandChange}
            />
          </Space>
        </Panel>
        <Panel header={<Title level={5}>Material</Title>} key="6">
          <Space direction="vertical">
            <Checkbox.Group
              options={optionMaterials}
              onChange={handleMaterialChange}
            />
          </Space>
        </Panel>
      </Collapse>
    </div>
  )
}

export default Filter
