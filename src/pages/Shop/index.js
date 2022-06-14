import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import './index.less'

import BicycleCard from '../../components/BicycleCard'
import BicycleSearch from '../../components/BicycleSearch'
import BicyclePagination from '../../components/BicyclePagination'

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
import './index.less'
import { DeleteOutlined } from '@ant-design/icons'
import BicycleFooter from '../../components/BicycleFooter'

import { HomeNavigation } from '../../components'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { bicyclesSelector } from '../../redux/selectors'
import shopSlice, { fetchBicycles } from './shopSlice'

const { Title } = Typography
const { Panel } = Collapse
const { Content } = Layout

const optionTypes = [
  {
    label: 'Mountain Bike',
    value: 'Mountain Bike',
  },
  {
    label: 'Road Bike',
    value: 'Road Bike',
  },
  {
    label: 'Touring Bike',
    value: 'Touring Bike',
  },
  {
    label: 'Folding Bike',
    value: 'Folding Bike',
  },
  {
    label: 'Electric Bike',
    value: 'Electric Bike',
  },
  {
    label: 'City Bike',
    value: 'City Bike',
  },
]

const optionColors = [
  {
    label: 'Red',
    value: 'color 1',
  },
  {
    label: 'Blue',
    value: 'color 2',
  },
  {
    label: 'Black',
    value: 'color 3',
  },
]

const optionGenders = [
  {
    label: 'Male',
    value: 'Male',
  },
  {
    label: 'Female',
    value: 'Female',
  },
  {
    label: 'Unisex',
    value: 'Unisex',
  },
]

const Shop = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState(20)
  const [inputValue2, setInputValue2] = useState(50)
  const [openSearchBar, setOpenSearchBar] = useState(true)

  const bicycles = useSelector(bicyclesSelector)
  console.log(bicycles)

  // Load data
  useEffect(() => {
    dispatch(fetchBicycles())
  }, [])

  const onChange = (value) => {
    console.log('onChange: ', value)
  }

  const handleChangeCheckBox = (e) => {
    console.log(e)
  }

  const handleChangeSlider = (value) => {
    console.log('onChange: ', value)
    setInputValue(value[0])
    setInputValue2(value[1])
  }

  const onAfterChangeSlider = (value) => {
    console.log('onAfterChange: ', value)
  }

  return (
    <Layout>
      <HomeNavigation />
      <Content>
        <div className="shop-page">
          <div className="container">
            <div className="shop-page__wrapper">
              <Title className="shop-title">Our products</Title>
              <Row>
                <Col span={6}>
                  <div className="filter-bar-ctn">
                    <Collapse
                      className="filter-bar"
                      style={{ height: '100%', borderRight: 0 }}
                      defaultActiveKey={['1', '2', '3', '4', '5']}
                      onChange={onChange}
                      expandIconPosition="end"
                      bordered={false}
                    >
                      <Panel header={<Title level={5}>Price</Title>} key="1">
                        <div className="price-input">
                          <Space>
                            <InputNumber
                              disabled
                              min={1}
                              max={99}
                              defaultValue={10}
                              value={inputValue}
                              onChange={handleChangeSlider}
                            />
                            <InputNumber
                              disabled
                              min={2}
                              max={100}
                              defaultValue={20}
                              value={inputValue2}
                              onChange={handleChangeSlider}
                            />
                          </Space>
                        </div>

                        <Slider
                          range
                          defaultValue={[20, 50]}
                          onChange={handleChangeSlider}
                          onAfterChange={onAfterChangeSlider}
                        />
                      </Panel>
                      <Panel header={<Title level={5}>Type</Title>} key="2">
                        <Space direction="vertical">
                          <Checkbox.Group
                            options={optionTypes}
                            onChange={handleChangeCheckBox}
                          />
                        </Space>
                      </Panel>
                      <Panel header={<Title level={5}>Color</Title>} key="3">
                        <Space direction="vertical">
                          <Checkbox.Group
                            options={optionColors}
                            onChange={handleChangeCheckBox}
                          />
                        </Space>
                      </Panel>
                      <Panel header={<Title level={5}>Gender</Title>} key="4">
                        <Space direction="vertical">
                          <Checkbox.Group
                            options={optionGenders}
                            onChange={handleChangeCheckBox}
                          />
                        </Space>
                      </Panel>

                      <div className="button-ctn">
                        <Space>
                          <Button type="primary">APPLY FILTER</Button>
                          <Button icon={<DeleteOutlined />} shape="circle" />
                        </Space>
                      </div>
                    </Collapse>
                  </div>
                </Col>
                <Col span={18}>
                  <div className="shop-page-product">
                    <div className="product-search">
                      {openSearchBar ? (
                        <BicycleSearch setOpenSearchBar={setOpenSearchBar} />
                      ) : (
                        <Tooltip title="search">
                          <Button
                            onClick={() => {
                              setOpenSearchBar(true)
                            }}
                            type="primary"
                            size="large"
                          >
                            Search
                          </Button>
                        </Tooltip>
                      )}
                    </div>
                    <div className="product-grid">
                      <Row>
                        {bicycles.status === 'loading' ? (
                          <h1>Loading</h1>
                        ) : (
                          bicycles.data.map((bicycle) => (
                            <Col span={6}>
                              <BicycleCard
                                img={bicycle.image[0]}
                                title={bicycle.name}
                                price={bicycle.price}
                                brand={bicycle.brand}
                              />
                            </Col>
                          ))
                        )}
                      </Row>
                    </div>
                    <div className="product-pagination">
                      <BicyclePagination />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Content>
      <BicycleFooter />
    </Layout>
  )
}

export default Shop
