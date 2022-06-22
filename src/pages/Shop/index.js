import React, { useEffect, useState } from 'react'
import { Col, Row, Skeleton } from 'antd'
import './index.less'

import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'

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
import HomeFooter from '../../components/HomeFooter'

import {
  HomeNavigation,
  SearchInput,
  LoadingAnimation,
  Pagination,
  BicycleCard,
  Select,
} from '../../components'

// import filter from '../../redux/slices/filterSlice'
import Filter from './Filters'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
  bicyclesSelector,
  bicyclesRemainingSelector,
} from '../../redux/selectors'
import {
  fetchBicycles,
  orderPriceChange,
  changeCurrentPage,
} from '../../redux/slices'
import EmptyData from '../../components/EmptyData'

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

  const handleChangeOrderPrice = (value) => {
    dispatch(orderPriceChange(value))
  }

  const BicycleList = () => {
    if (bicycles.status === 'loading') {
      return (
        <>
          <Col span={8}>
            <BicycleCard loading={true} />
          </Col>
          <Col span={8}>
            <BicycleCard loading={true} />
          </Col>
          <Col span={8}>
            <BicycleCard loading={true} />
          </Col>
          <Col span={8}>
            <BicycleCard loading={true} />
          </Col>
          <Col span={8}>
            <BicycleCard loading={true} />
          </Col>
        </>
      )
    }

    if (!bicycles.data.length)
      return (
        <Col span={24}>
          <Space
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              minHeight: '50vh',
            }}
          >
            <EmptyData />
          </Space>
        </Col>
      )

    return bicycles.data.map((bicycle, index) => (
      <Col
        xxl={8}
        xl={8}
        lg={8}
        md={12}
        sm={12}
        xs={24}
        key={index}
        className="bicycles-data"
      >
        <BicycleCard
          id={bicycle.id}
          price={bicycle.price}
          brand={bicycle.brand}
          img={bicycle?.images[0]}
          title={bicycle.name}
        />
      </Col>
    ))
  }

  return (
    <Layout>
      <HomeNavigation />
      <Content>
        <div className="shop-page">
          <div className="container">
            <div className="shop-page-wrapper">
              <Row gutter={[16, 16]}>
                <Col xl={6} md={8} sm={24} xs={24}>
                  <Filter />
                </Col>
                <Col xl={18} md={16} sm={24} xs={24}>
                  <Row gutter={[16, 16]}>
                    <Col span={24}>
                      <Row className="filter-search">
                        <Col xl={16} md={12} sm={24} xs={24}>
                          <div className="order-by">
                            <Text className="order-by-label">ORDER BY</Text>
                            <Select
                              style={{
                                minWidth: '140px',
                              }}
                              onChange={handleChangeOrderPrice}
                              defaultValue={'default'}
                              options={[
                                {
                                  key: 'default',
                                  value: 'Price',
                                },
                                {
                                  key: 'asc',
                                  value: 'Low to High',
                                },
                                {
                                  key: 'desc',
                                  value: 'High to Low',
                                },
                              ]}
                            />
                          </div>
                        </Col>
                        <Col
                          xl={8}
                          md={12}
                          sm={24}
                          xs={24}
                          className="search-input"
                        >
                          <SearchInput />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row gutter={8}>
                    <BicycleList className="bicycle-list" />
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col span={24}>
                      <Pagination
                        total={bicycles.pagination.total}
                        current={bicycles.pagination.current}
                        pageSize={bicycles.pagination.pageSize}
                        onChange={(num) => dispatch(changeCurrentPage(num))}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Content>
      <HomeFooter />
    </Layout>
  )
}

export default Shop
