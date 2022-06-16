import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import './index.less'

import { ArrowDownOutlined } from '@ant-design/icons'

import BicycleCard from '../../components/BicycleCard'
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

import { HomeNavigation, SearchInput } from '../../components'

import Filter from './Filters'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
  bicyclesSelector,
  bicyclesRemainingSelector,
} from '../../redux/selectors'
import { fetchBicycles } from '../../redux/bicycle/bicycleSlice'

const { Title, Text } = Typography
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
    label: 'Bronze',
    value: 'Bronze',
  },
  {
    label: 'Black',
    value: 'Black',
  },
  {
    label: 'Blue',
    value: 'Blue',
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

const Shop = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState(20)
  const [inputValue2, setInputValue2] = useState(50)
  const [openSearchBar, setOpenSearchBar] = useState(true)
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const bicycles = useSelector(bicyclesRemainingSelector)
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
            <div className="shop-page-wrapper">
              <Title className="shop-page-title" level={2}>
                Our products
              </Title>
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <Filter />
                </Col>
                <Col span={18}>
                  <Row gutter={[16, 16]}>
                    <Col span={24}>
                      <Row>
                        <Col span={16}>
                          <div className="order-by">
                            <Text className="order-by-label">ORDER BY</Text>
                            <Button icon={<ArrowDownOutlined />}>New</Button>
                            <Button icon={<ArrowDownOutlined />}>Price</Button>
                          </div>
                        </Col>
                        <Col span={8}>
                          <SearchInput />
                        </Col>
                      </Row>
                    </Col>
                    {bicycles.status === "loading" ? (
                      <h1>Loading</h1>
                    ) : (
                      bicycles.data
                        .slice(
                          (currentPage - 1) * pageSize,
                          currentPage * pageSize
                        )
                        .map((bicycle, index) => (
                          <Col span={8} key={index}>
                            <BicycleCard
                              img={bicycle?.images[0]}
                              title={bicycle.name}
                              price={bicycle.price}
                              brand={bicycle.brand}
                              id={bicycle.id}
                            />
                          </Col>
                        ))
                    )}
                  </Row>
                  <BicyclePagination
                    items={bicycles.data}
                    onChange={setCurrentPage}
                    current={currentPage}
                    total={bicycles.data.length}
                    pageSize={pageSize}
                  />
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
