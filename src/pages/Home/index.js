import {
  Button,
  Checkbox,
  Collapse,
  InputNumber,
  Slider,
  Space,
  Typography,
} from 'antd'
import React, { useState } from 'react'
import './index.less'
import { DeleteOutlined } from '@ant-design/icons'
import BicycleFooter from '../../components/BicycleFooter';

const { Title } = Typography
const { Panel } = Collapse

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const options = [
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

const Home = () => {
  const [inputValue, setInputValue] = useState(20)
  const [inputValue2, setInputValue2] = useState(50)

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
    <>
    <div className="homepage">
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
                  // onChange={onChange}
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
                options={options}
                onChange={handleChangeCheckBox}
              />
            </Space>
          </Panel>
          <Panel header={<Title level={5}>Brand</Title>} key="3">
            <p>{text}</p>
          </Panel>
          <Panel header={<Title level={5}>Color</Title>} key="4">
            <p>{text}</p>
          </Panel>
          <div className="button-ctn">
            <Space>
              <Button type="primary">APPLY FILTER</Button>
              <Button icon={<DeleteOutlined />} shape="circle"></Button>
            </Space>
          </div>
        </Collapse>
      </div>
      <div className="list-ctn">This is List of Bicycle</div>
    </div>
    <div className='footer-homepage'>
    <BicycleFooter/>
    </div>
        </>
  )
}

export default Home
