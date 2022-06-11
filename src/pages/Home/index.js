import React, { useState } from 'react'
import './index.less'
import BicycleGrid from '../../components/BicycleGrid'
import BicycleSearch from '../../components/BicycleSearch'
import BicyclePagination from '../../components/BicyclePagination'
import { HomeNavigation } from '../../components/index'

import {
  Button,
  Carousel,
  Checkbox,
  Collapse,
  Image,
  InputNumber,
  Slider,
  Space,
  Tooltip,
  Typography,
} from 'antd'
import './index.less'
import { DeleteOutlined, SearchOutlined } from '@ant-design/icons'

const { Title } = Typography
const { Panel } = Collapse

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

const imageCarousel = [
  {
    src: 'https://s3.ap-south-1.amazonaws.com/choosemybicycle.webp/homepage/may-2022/home-ecom-grid-large-triad.webp',
  },
  {
    src: 'https://surlybikes.com/uploads/pages/surly-bridge-club-bike-majestic-moss-green-795807_1500x1000.jpg',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/591075e02994cac296dedfcb/1598607855776-PLKOR4EKSCS9HAFDT2LU/Copenhagenize+Index+Banner2.jpg?format=1000w',
  },
]

const contentStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '900px',
  height: '500px',
}

const Home = () => {
  const [inputValue, setInputValue] = useState(20)
  const [inputValue2, setInputValue2] = useState(50)
  const [openSearchBar, setOpenSearchBar] = useState(false)

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
    <div className="homepage-ctn">
      <div className="homepage-header">
        <HomeNavigation />
      </div>
      <div className="homepage-content-ctn">
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
        <div className="homepage-product">
          <div className="carousel-play">
            <Carousel autoplay>
              {imageCarousel.map((item) => {
                return (
                  <div>
                    <Image
                      src={item.src}
                      preview={false}
                      style={contentStyle}
                    />
                  </div>
                )
              })}
            </Carousel>
          </div>

          <Title className="shop-title">Bicycle List</Title>

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
                  icon={<SearchOutlined />}
                  size="large"
                >
                  Search
                </Button>
              </Tooltip>
            )}
          </div>
          <div className="product-grid">
            <BicycleGrid />
          </div>
          <div className="product-pagination">
            <BicyclePagination />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
