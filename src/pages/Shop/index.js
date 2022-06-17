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

// import filter from '../../redux/slices/filterSlice'
import Filter from './Filters'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
  bicyclesSelector,
  bicyclesRemainingSelector,
} from '../../redux/selectors'
import { fetchBicycles } from '../../redux/slices'

const { Title, Text } = Typography
const { Panel } = Collapse
const { Content } = Layout

const Shop = () => {
  const dispatch = useDispatch()

  const bicycles = useSelector(bicyclesRemainingSelector)

  // Load data
  useEffect(() => {
    dispatch(fetchBicycles())
  }, [])

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
                    {bicycles.status === 'loading' ? (
                      <h1>Loading</h1>
                    ) : (
                      bicycles.data.map((bicycle, index) => (
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
                  {/* <BicyclePagination
                    items={bicycles.data}
                    onChange={setCurrentPage}
                    current={currentPage}
                    total={bicycles.data.length}
                  /> */}
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
