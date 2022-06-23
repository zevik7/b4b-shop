import {
  DashboardOutlined,
  DollarOutlined,
  ManOutlined,
  RocketOutlined,
  SketchOutlined,
} from '@ant-design/icons'
import {
  Checkbox,
  Collapse,
  InputNumber,
  Slider,
  Space,
  Typography,
} from 'antd'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import filterSlice from '../../../redux/slices/filterSlice'
import './style.less'

const { Title } = Typography
const { Panel } = Collapse

const Filter = () => {
  const priceSelector = useSelector((state) => state.shopFilter.price)
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState(priceSelector[0])
  const [inputValue2, setInputValue2] = useState(priceSelector[1])

  const { t } = useTranslation()

  const optionTypes = [
    {
      label: `${t('filter.filter-bar.type.mountain-bike')}`,
      value: 'Mountain Bikes',
    },
    {
      label: `${t('filter.filter-bar.type.road-bike')}`,
      value: 'Road Bikes',
    },
    {
      label: `${t('filter.filter-bar.type.kid-bike')}`,
      value: 'Kid Bikes',
    },
    {
      label: `${t('filter.filter-bar.type.gravel-bike')}`,
      value: 'Gravel Bikes',
    },
    {
      label: `${t('filter.filter-bar.type.electric-bike')}`,
      value: 'Electric Bikes',
    },
  ]

  const optionGenders = [
    {
      label: `${t('filter.filter-bar.gender.men')}`,
      value: 'Mens',
    },
    {
      label: `${t('filter.filter-bar.gender.women')}`,
      value: 'Womens',
    },
    {
      label: `${t('filter.filter-bar.gender.unisex')}`,
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
      label: `${t('filter.filter-bar.material.carbon')}`,
      value: 'Carbon',
    },
    {
      label: `${t('filter.filter-bar.material.aluminum')}`,
      value: 'Aluminum',
    },
  ]

  const onChange = (value) => {
    console.log('onChange: ', value)
  }

  const handleTypeChange = (value) => {
    dispatch(filterSlice.actions.typeChange(value))
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
        defaultActiveKey={['1', '2', '3', '4', '5']}
        onChange={onChange}
        expandIconPosition="end"
        bordered={false}
      >
        <Panel
          header={
            <Title level={5}>
              <DollarOutlined className="icon-antd" />
              {t('filter.filter-bar.price.title')}
            </Title>
          }
          key="1"
        >
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
        <Panel
          header={
            <Title level={5}>
              <RocketOutlined className="icon-antd" />
              {t('filter.filter-bar.brand.title')}
            </Title>
          }
          key="2"
        >
          <Space direction="vertical">
            <Checkbox.Group
              options={optionBrands}
              onChange={handleBrandChange}
            />
          </Space>
        </Panel>
        <Panel
          header={
            <Title level={5}>
              <SketchOutlined className="icon-antd" />
              {t('filter.filter-bar.material.title')}
            </Title>
          }
          key="3"
        >
          <Space direction="vertical">
            <Checkbox.Group
              options={optionMaterials}
              onChange={handleMaterialChange}
            />
          </Space>
        </Panel>
        <Panel
          header={
            <Title level={5}>
              <ManOutlined className="icon-antd" />{' '}
              {t('filter.filter-bar.gender.title')}
            </Title>
          }
          key="4"
        >
          <Space direction="vertical">
            <Checkbox.Group
              options={optionGenders}
              onChange={handleGenderChange}
            />
          </Space>
        </Panel>
        <Panel
          header={
            <Title level={5}>
              <DashboardOutlined className="icon-antd" />
              {t('filter.filter-bar.type.title')}
            </Title>
          }
          key="5"
        >
          <Space direction="vertical">
            <Checkbox.Group options={optionTypes} onChange={handleTypeChange} />
          </Space>
        </Panel>
      </Collapse>
    </div>
  )
}

export default Filter
