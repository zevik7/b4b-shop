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

import Filter from './Filters'
import Searchbar from './SearchBar'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
  bicyclesRemainingSelector,
  bicyclesSelector,
} from '../../redux/selectors'
import shopSlice, { fetchBicycles } from './shopSlice'

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
            <div className="shop-page__wrapper">
              <Title className="shop-title">Our products</Title>
              <Row>
                <Col span={6}>
                  <Filter />
                </Col>
                <Col span={18}>
                  <div className="shop-page-product">
                    <div className="product-search">
                      <Searchbar />
                    </div>
                    <div className="product-grid">
                      <Row gutter={[16, 16]}>
                        {bicycles.status === 'loading' ? (
                          <h1>Loading</h1>
                        ) : (
                          bicycles.data.map((bicycle) => (
                            <Col span={8}>
                              <BicycleCard
                                img={bicycle.image}
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
