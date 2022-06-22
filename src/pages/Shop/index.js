import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { DeleteOutlined } from '@ant-design/icons'
import { Col, Row, Skeleton } from 'antd'
import {
  Button,
  Checkbox,
  Collapse,
  InputNumber,
  Layout,
  Slider,
  Space,
  Tooltip,
  Typography,
} from 'antd'
import { t } from 'i18next'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
// Redux
import { useDispatch, useSelector } from 'react-redux'

import {
  BicycleCard,
  HomeNavigation,
  LoadingAnimation,
  Pagination,
  SearchInput,
  Select,
} from '../../components'
import EmptyData from '../../components/EmptyData'
import HomeFooter from '../../components/HomeFooter'
import {
  bicyclesRemainingSelector,
  bicyclesSelector,
} from '../../redux/selectors'
import {
  changeCurrentPage,
  fetchBicycles,
  orderPriceChange,
} from '../../redux/slices'
// import filter from '../../redux/slices/filterSlice'
import Filter from './Filters'
import './index.less'
import './index.less'

const { Title, Text } = Typography
const { Panel } = Collapse
const { Content } = Layout

const Shop = () => {
  const dispatch = useDispatch()
  const bicycles = useSelector(bicyclesRemainingSelector)

  const { t } = useTranslation()

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
      <Col span={8} key={index}>
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
                <Col span={6}>
                  <Filter />
                </Col>
                <Col span={18}>
                  <Row gutter={[16, 16]}>
                    <Col span={24}>
                      <Row>
                        <Col span={16}>
                          <div className="order-by">
                            <Text className="order-by-label">
                              {t('common.order')}
                            </Text>
                            <Select
                              style={{
                                minWidth: '140px',
                              }}
                              onChange={handleChangeOrderPrice}
                              defaultValue={'default'}
                              options={[
                                {
                                  key: 'default',
                                  value: `${t(
                                    'filter.filter-bar.price.title'
                                  )}`,
                                },
                                {
                                  key: 'asc',
                                  value: `${t('common.asc')}`,
                                },
                                {
                                  key: 'desc',
                                  value: `${t('common.desc')}`,
                                },
                              ]}
                            />
                          </div>
                        </Col>
                        <Col span={8}>
                          <SearchInput />
                        </Col>
                      </Row>
                    </Col>
                    <BicycleList />
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
